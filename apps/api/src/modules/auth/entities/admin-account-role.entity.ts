import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { AdminAccount } from './admin-account.entity.js';
import { AdminRoleEntity } from './admin-role.entity.js';
import type { AdminRole } from '../types/admin-role.type.js';

@Entity({ name: 'admin_account_roles' })
export class AdminAccountRole {
  @Index('idx_admin_account_roles_account_id')
  @PrimaryColumn({ name: 'account_id', type: 'varchar', length: 36 })
  accountId: string;

  @Index('idx_admin_account_roles_role_key')
  @PrimaryColumn({ name: 'role_key', type: 'varchar', length: 60 })
  roleKey: AdminRole;

  @ManyToOne(() => AdminAccount, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'account_id' })
  account: AdminAccount;

  @ManyToOne(() => AdminRoleEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'role_key' })
  role: AdminRoleEntity;

  @Column({ name: 'assigned_by', type: 'varchar', length: 36, nullable: true })
  assignedBy: string | null;

  @CreateDateColumn({ name: 'assigned_at' })
  assignedAt: Date;
}
