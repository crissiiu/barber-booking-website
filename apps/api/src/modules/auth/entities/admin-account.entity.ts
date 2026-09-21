import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EmployeeProfile } from './employee-profile.entity.js';

@Entity({ name: 'admin_accounts' })
export class AdminAccount {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index('idx_admin_accounts_username_phone', { unique: true })
  @Column({ name: 'username_phone', type: 'varchar', length: 20, unique: true })
  usernamePhone: string;

  @Column({ name: 'password_hash', type: 'varchar', length: 255 })
  passwordHash: string;

  @Index('idx_admin_accounts_employee_profile_id', { unique: true })
  @Column({ name: 'employee_profile_id', type: 'varchar', length: 36, unique: true })
  employeeProfileId: string;

  @OneToOne(() => EmployeeProfile)
  @JoinColumn({ name: 'employee_profile_id' })
  employeeProfile: EmployeeProfile;

  @Column({ name: 'is_active', type: 'boolean', default: true })
  isActive: boolean;

  @Column({ name: 'last_login_at', type: 'datetime', nullable: true })
  lastLoginAt: Date | null;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
