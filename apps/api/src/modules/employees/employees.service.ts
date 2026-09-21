import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CloudinaryService } from '../../infrastructure/cloudinary/cloudinary.service.js';
import { EmployeeProfile } from '../auth/entities/employee-profile.entity.js';

type UploadedMemoryFile = {
  buffer: Buffer;
  mimetype: string;
  originalname: string;
  size: number;
};

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(EmployeeProfile)
    private readonly employeeProfileRepository: Repository<EmployeeProfile>,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async uploadEmployeePhoto(employeeProfileId: string, file: UploadedMemoryFile) {
    const employee = await this.employeeProfileRepository.findOne({
      where: { id: employeeProfileId },
    });

    if (!employee) {
      throw new NotFoundException('Khong tim thay ho so nhan vien');
    }

    const employeePublicId = employee.employeeId ?? employee.id;
    const uploadResult = await this.cloudinaryService.uploadEmployeePhoto(
      file,
      employeePublicId,
    );

    employee.photoUrl = uploadResult.secureUrl;
    employee.photoPublicId = uploadResult.publicId;
    await this.employeeProfileRepository.save(employee);

    return {
      employeeId: employee.id,
      photoUrl: employee.photoUrl,
      photoPublicId: employee.photoPublicId,
    };
  }
}
