import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CloudinaryModule } from '../../infrastructure/cloudinary/cloudinary.module.js';
import { EmployeeProfile } from '../auth/entities/employee-profile.entity.js';
import { EmployeesController } from './employees.controller.js';
import { EmployeesService } from './employees.service.js';

@Module({
  imports: [CloudinaryModule, TypeOrmModule.forFeature([EmployeeProfile])],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
