import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

type UploadedMemoryFile = {
  buffer: Buffer;
  mimetype: string;
  originalname: string;
  size: number;
};

type CloudinaryUploadResponse = {
  public_id: string;
  secure_url: string;
  resource_type: string;
  bytes: number;
  format: string;
};

@Injectable()
export class CloudinaryService {
  private readonly maxImageSize = 5 * 1024 * 1024;

  constructor(private readonly configService: ConfigService) {}

  async uploadEmployeePhoto(file: UploadedMemoryFile, employeeId: string) {
    this.validateImage(file);

    const cloudName = this.configService.getOrThrow<string>(
      'CLOUDINARY_CLOUD_NAME',
    );
    const apiKey = this.configService.getOrThrow<string>('CLOUDINARY_API_KEY');
    const apiSecret = this.configService.getOrThrow<string>(
      'CLOUDINARY_API_SECRET',
    );
    const folder = this.configService.getOrThrow<string>(
      'CLOUDINARY_EMPLOYEE_FOLDER',
    );
    const publicId = `${folder}/${employeeId}`;
    const formData = new FormData();
    const fileBytes = new Uint8Array(file.buffer);
    const fileArrayBuffer = fileBytes.buffer.slice(
      fileBytes.byteOffset,
      fileBytes.byteOffset + fileBytes.byteLength,
    ) as ArrayBuffer;

    formData.append(
      'file',
      new File([fileArrayBuffer], file.originalname, { type: file.mimetype }),
    );
    formData.append('folder', folder);
    formData.append('public_id', employeeId);
    formData.append('overwrite', 'true');
    formData.append('resource_type', 'image');

    const credentials = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${credentials}`,
        },
        body: formData,
      },
    );

    if (!response.ok) {
      const detail = await response.text();
      throw new InternalServerErrorException(
        `Cloudinary upload failed: ${detail}`,
      );
    }

    const result = (await response.json()) as CloudinaryUploadResponse;

    return {
      publicId: result.public_id || publicId,
      secureUrl: result.secure_url,
      resourceType: result.resource_type,
      bytes: result.bytes,
      format: result.format,
    };
  }

  private validateImage(file: UploadedMemoryFile) {
    if (!file) {
      throw new BadRequestException('Thieu file anh nhan vien');
    }

    if (!file.mimetype.startsWith('image/')) {
      throw new BadRequestException('File upload phai la hinh anh');
    }

    if (file.size > this.maxImageSize) {
      throw new BadRequestException('Anh nhan vien khong duoc vuot qua 5MB');
    }
  }
}
