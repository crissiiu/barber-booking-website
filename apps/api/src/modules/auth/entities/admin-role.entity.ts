import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import type { AdminPermission, AdminRole } from '../types/admin-role.type.js';

@Entity({ name: 'admin_roles' })
export class AdminRoleEntity {
  @PrimaryColumn({ type: 'varchar', length: 60 })
  key: AdminRole;

  @Column({ type: 'varchar', length: 160 })
  label: string;

  @Column({ type: 'json' })
  permissions: AdminPermission[];

  @Column({ type: 'text', nullable: true })
  description: string | null;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
