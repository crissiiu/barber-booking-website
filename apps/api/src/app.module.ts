import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import appConfig from './config/app.config.js';
import databaseConfig from './config/database.config.js';
import { envValidationSchema } from './config/env.validation.js';
import { DatabaseModule } from './infrastructure/database/database.module.js';
import { AuthModule } from './modules/auth/auth.module.js';
import { BarbersModule } from './modules/barbers/barbers.module.js';
import { BookingsModule } from './modules/bookings/bookings.module.js';
import { CustomersModule } from './modules/customers/customers.module.js';
import { NotificationsModule } from './modules/notifications/notifications.module.js';
import { PaymentsModule } from './modules/payments/payments.module.js';
import { SchedulesModule } from './modules/schedules/schedules.module.js';
import { ServicesModule } from './modules/services/services.module.js';
import { UsersModule } from './modules/users/users.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig],
      validationSchema: envValidationSchema,
    }),
    DatabaseModule,
    AuthModule,
    UsersModule,
    CustomersModule,
    BarbersModule,
    ServicesModule,
    SchedulesModule,
    BookingsModule,
    PaymentsModule,
    NotificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
