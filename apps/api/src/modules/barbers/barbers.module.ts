import { Module } from '@nestjs/common';
import { BarbersController } from './controllers/barbers.controller.js';
import { BarbersService } from './services/barbers.service.js';

@Module({
  controllers: [BarbersController],
  providers: [BarbersService],
})
export class BarbersModule {}
