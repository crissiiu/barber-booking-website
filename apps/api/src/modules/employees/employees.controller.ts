import {
  Controller,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { EmployeesService } from './employees.service.js';

type UploadedMemoryFile = {
  buffer: Buffer;
  mimetype: string;
  originalname: string;
  size: number;
};

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post(':id/photo')
  @UseInterceptors(FileInterceptor('photo'))
  uploadEmployeePhoto(
    @Param('id') id: string,
    @UploadedFile() file: UploadedMemoryFile,
  ) {
    return this.employeesService.uploadEmployeePhoto(id, file);
  }
}
