import {
  Body,
  Controller,
  Get,
  Headers,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminLoginDto } from '../dto/admin-login.dto.js';
import { AuthService } from '../services/auth.service.js';
import type { AuthenticatedAdmin } from '../types/authenticated-admin.type.js';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('admin/login')
  loginAdmin(@Body() dto: AdminLoginDto) {
    return this.authService.loginAdmin(dto);
  }

  @Get('admin/me')
  async getAdminProfile(@Headers('authorization') authorization?: string) {
    const token = authorization?.replace(/^Bearer\s+/i, '');

    if (!token) {
      throw new UnauthorizedException('Thieu access token');
    }

    const payload = await this.jwtService.verifyAsync<AuthenticatedAdmin>(token);
    return this.authService.getAdminProfile(payload);
  }
}
