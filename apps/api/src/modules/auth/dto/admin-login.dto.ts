import { IsNotEmpty, IsString, Matches, MinLength } from 'class-validator';

export class AdminLoginDto {
  @Matches(/^0\d{9}$/)
  phone: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  password: string;
}
