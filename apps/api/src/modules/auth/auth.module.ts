import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './controllers/auth.controller.js';
import { AdminAccountRole } from './entities/admin-account-role.entity.js';
import { AdminAccount } from './entities/admin-account.entity.js';
import { AdminRoleEntity } from './entities/admin-role.entity.js';
import { EmployeeProfile } from './entities/employee-profile.entity.js';
import { AuthService } from './services/auth.service.js';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AdminAccount,
      AdminAccountRole,
      AdminRoleEntity,
      EmployeeProfile,
    ]),
    JwtModule.register({
      secret: process.env.JWT_SECRET ?? 'siubarber-admin-dev-secret',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
