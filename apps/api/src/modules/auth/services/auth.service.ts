import {
  Injectable,
  OnModuleInit,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { AdminLoginDto } from '../dto/admin-login.dto.js';
import { AdminAccountRole } from '../entities/admin-account-role.entity.js';
import { AdminAccount } from '../entities/admin-account.entity.js';
import { AdminRoleEntity } from '../entities/admin-role.entity.js';
import { EmployeeProfile } from '../entities/employee-profile.entity.js';
import {
  ADMIN_ROLES,
  getPermissionsForRoles,
  roleLabels,
  rolePermissions,
} from '../types/admin-role.type.js';
import type { AdminRole } from '../types/admin-role.type.js';
import type { AuthenticatedAdmin } from '../types/authenticated-admin.type.js';

@Injectable()
export class AuthService implements OnModuleInit {
  private readonly ownerPhone = '0968832714';
  private readonly ownerPassword = 'admin';

  constructor(
    @InjectRepository(AdminAccount)
    private readonly adminAccountRepository: Repository<AdminAccount>,
    @InjectRepository(AdminAccountRole)
    private readonly adminAccountRoleRepository: Repository<AdminAccountRole>,
    @InjectRepository(AdminRoleEntity)
    private readonly adminRoleRepository: Repository<AdminRoleEntity>,
    @InjectRepository(EmployeeProfile)
    private readonly employeeProfileRepository: Repository<EmployeeProfile>,
    private readonly jwtService: JwtService,
  ) {}

  async onModuleInit() {
    await this.ensureRoles();
    await this.ensureOwnerAccount();
  }

  async loginAdmin(dto: AdminLoginDto) {
    const account = await this.adminAccountRepository.findOne({
      where: { usernamePhone: dto.phone },
      relations: { employeeProfile: true },
    });

    if (!account || !account.isActive) {
      throw new UnauthorizedException('So dien thoai hoac mat khau khong dung');
    }

    const isPasswordValid = await bcrypt.compare(
      dto.password,
      account.passwordHash,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('So dien thoai hoac mat khau khong dung');
    }

    account.lastLoginAt = new Date();
    await this.adminAccountRepository.save(account);

    const roles = await this.getAccountRoleKeys(account.id);

    return {
      accessToken: await this.signAdminToken(account, roles),
      admin: this.toAdminProfile(account, roles),
    };
  }

  async getAdminProfile(authenticatedAdmin: AuthenticatedAdmin) {
    const account = await this.adminAccountRepository.findOne({
      where: { id: authenticatedAdmin.sub },
      relations: { employeeProfile: true },
    });

    if (!account || !account.isActive) {
      throw new UnauthorizedException('Tai khoan admin khong hop le');
    }

    const roles = await this.getAccountRoleKeys(account.id);
    return this.toAdminProfile(account, roles);
  }

  private async ensureRoles() {
    for (const role of ADMIN_ROLES) {
      await this.adminRoleRepository.upsert(
        {
          key: role,
          label: roleLabels[role],
          permissions: rolePermissions[role],
          description: role === 'owner' ? 'Tai khoan toan quyen he thong' : null,
        },
        ['key'],
      );
    }
  }

  private async ensureOwnerAccount() {
    let ownerEmployee = await this.employeeProfileRepository.findOne({
      where: { contactPhone: this.ownerPhone },
    });
    const passwordHash = await bcrypt.hash(this.ownerPassword, 12);

    if (!ownerEmployee) {
      ownerEmployee = await this.employeeProfileRepository.save(
        this.employeeProfileRepository.create({
          employeeId: 'OWNER-001',
          lastAndMiddleName: 'SiuBarber',
          firstName: 'Owner',
          dateOfBirth: null,
          gender: null,
          hometown: null,
          permanentAddress: null,
          temporaryAddress: null,
          maritalStatus: null,
          nationalIdNumber: null,
          email: null,
          contactPhone: this.ownerPhone,
          photoUrl: '/brand/siubarber-mark.svg',
          photoPublicId: null,
          educationLevel: null,
          religion: null,
          professionalSkills: 'Quan tri he thong',
          workExperience: null,
          position: 'Chu so huu he thong',
          contractType: 'owner',
          salary: null,
          startDate: null,
          contractStartDate: null,
          contractEndDate: null,
          socialInsuranceNumber: null,
          taxCode: null,
          healthStatus: null,
          emergencyContactName: null,
          emergencyContactPhone: null,
          violations: null,
          resignationDate: null,
          resignationReason: null,
          status: 'active',
          notes: 'Tai khoan owner mac dinh duoc seed tu backend.',
        }),
      );
    } else {
      ownerEmployee.employeeId = ownerEmployee.employeeId || 'OWNER-001';
      ownerEmployee.lastAndMiddleName = 'SiuBarber';
      ownerEmployee.firstName = 'Owner';
      ownerEmployee.contactPhone = this.ownerPhone;
      ownerEmployee.photoUrl = ownerEmployee.photoUrl || '/brand/siubarber-mark.svg';
      ownerEmployee.photoPublicId = ownerEmployee.photoPublicId || null;
      ownerEmployee.position = 'Chu so huu he thong';
      ownerEmployee.contractType = 'owner';
      ownerEmployee.status = 'active';
      ownerEmployee = await this.employeeProfileRepository.save(ownerEmployee);
    }

    let ownerAccount = await this.adminAccountRepository.findOne({
      where: { usernamePhone: this.ownerPhone },
    });

    if (!ownerAccount) {
      ownerAccount = this.adminAccountRepository.create({
        usernamePhone: this.ownerPhone,
        passwordHash,
        employeeProfileId: ownerEmployee.id,
        isActive: true,
        lastLoginAt: null,
      });
    } else {
      ownerAccount.passwordHash = passwordHash;
      ownerAccount.employeeProfileId = ownerEmployee.id;
      ownerAccount.isActive = true;
    }

    ownerAccount = await this.adminAccountRepository.save(ownerAccount);

    await this.adminAccountRoleRepository.upsert(
      {
        accountId: ownerAccount.id,
        roleKey: 'owner',
        assignedBy: null,
      },
      ['accountId', 'roleKey'],
    );
  }

  private async signAdminToken(account: AdminAccount, roles: AdminRole[]) {
    return this.jwtService.signAsync({
      sub: account.id,
      phone: account.usernamePhone,
      roles,
    });
  }

  private async getAccountRoleKeys(accountId: string) {
    const accountRoles = await this.adminAccountRoleRepository.find({
      where: { accountId },
    });

    return accountRoles.map((accountRole) => accountRole.roleKey);
  }

  private toAdminProfile(account: AdminAccount, roles: AdminRole[]) {
    const employee = account.employeeProfile;
    const roleKeys = roles.length > 0 ? roles : [];

    return {
      id: account.id,
      fullName: `${employee.lastAndMiddleName} ${employee.firstName}`.trim(),
      phone: account.usernamePhone,
      roles: roleKeys,
      permissions: getPermissionsForRoles(roleKeys),
      title: employee.position,
      isActive: account.isActive,
      employee: {
        id: employee.id,
        employeeId: employee.employeeId,
        lastAndMiddleName: employee.lastAndMiddleName,
        firstName: employee.firstName,
        dateOfBirth: employee.dateOfBirth,
        gender: employee.gender,
        hometown: employee.hometown,
        permanentAddress: employee.permanentAddress,
        temporaryAddress: employee.temporaryAddress,
        maritalStatus: employee.maritalStatus,
        nationalIdNumber: employee.nationalIdNumber,
        email: employee.email,
        contactPhone: employee.contactPhone,
        photoUrl: employee.photoUrl,
        photoPublicId: employee.photoPublicId,
        educationLevel: employee.educationLevel,
        religion: employee.religion,
        professionalSkills: employee.professionalSkills,
        workExperience: employee.workExperience,
        position: employee.position,
        contractType: employee.contractType,
        salary: employee.salary,
        startDate: employee.startDate,
        contractStartDate: employee.contractStartDate,
        contractEndDate: employee.contractEndDate,
        socialInsuranceNumber: employee.socialInsuranceNumber,
        taxCode: employee.taxCode,
        healthStatus: employee.healthStatus,
        emergencyContactName: employee.emergencyContactName,
        emergencyContactPhone: employee.emergencyContactPhone,
        violations: employee.violations,
        resignationDate: employee.resignationDate,
        resignationReason: employee.resignationReason,
        status: employee.status,
        notes: employee.notes,
      },
    };
  }
}
