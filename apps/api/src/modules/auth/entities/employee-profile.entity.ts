import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'employee_profiles' })
export class EmployeeProfile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index('idx_employee_profiles_employee_id', { unique: true })
  @Column({
    name: 'employee_id',
    type: 'varchar',
    length: 40,
    unique: true,
    nullable: true,
  })
  employeeId: string | null;

  @Column({ name: 'last_and_middle_name', type: 'varchar', length: 120 })
  lastAndMiddleName: string;

  @Column({ name: 'first_name', type: 'varchar', length: 60 })
  firstName: string;

  @Column({ name: 'date_of_birth', type: 'date', nullable: true })
  dateOfBirth: string | null;

  @Column({ type: 'varchar', length: 20, nullable: true })
  gender: string | null;

  @Column({ type: 'varchar', length: 180, nullable: true })
  hometown: string | null;

  @Column({ name: 'permanent_address', type: 'varchar', length: 255, nullable: true })
  permanentAddress: string | null;

  @Column({ name: 'temporary_address', type: 'varchar', length: 255, nullable: true })
  temporaryAddress: string | null;

  @Column({ name: 'marital_status', type: 'varchar', length: 60, nullable: true })
  maritalStatus: string | null;

  @Column({ name: 'national_id_number', type: 'varchar', length: 30, nullable: true })
  nationalIdNumber: string | null;

  @Column({ type: 'varchar', length: 160, nullable: true })
  email: string | null;

  @Index('idx_employee_profiles_contact_phone', { unique: true })
  @Column({ name: 'contact_phone', type: 'varchar', length: 20, unique: true })
  contactPhone: string;

  @Column({ name: 'photo_url', type: 'varchar', length: 500, nullable: true })
  photoUrl: string | null;

  @Column({ name: 'photo_public_id', type: 'varchar', length: 255, nullable: true })
  photoPublicId: string | null;

  @Column({ name: 'education_level', type: 'varchar', length: 120, nullable: true })
  educationLevel: string | null;

  @Column({ type: 'varchar', length: 80, nullable: true })
  religion: string | null;

  @Column({ name: 'professional_skills', type: 'text', nullable: true })
  professionalSkills: string | null;

  @Column({ name: 'work_experience', type: 'text', nullable: true })
  workExperience: string | null;

  @Column({ type: 'varchar', length: 120 })
  position: string;

  @Column({ name: 'contract_type', type: 'varchar', length: 120, nullable: true })
  contractType: string | null;

  @Column({ type: 'decimal', precision: 15, scale: 2, nullable: true })
  salary: string | null;

  @Column({ name: 'start_date', type: 'date', nullable: true })
  startDate: string | null;

  @Column({ name: 'contract_start_date', type: 'date', nullable: true })
  contractStartDate: string | null;

  @Column({ name: 'contract_end_date', type: 'date', nullable: true })
  contractEndDate: string | null;

  @Column({ name: 'social_insurance_number', type: 'varchar', length: 40, nullable: true })
  socialInsuranceNumber: string | null;

  @Column({ name: 'tax_code', type: 'varchar', length: 40, nullable: true })
  taxCode: string | null;

  @Column({ name: 'health_status', type: 'varchar', length: 160, nullable: true })
  healthStatus: string | null;

  @Column({ name: 'emergency_contact_name', type: 'varchar', length: 120, nullable: true })
  emergencyContactName: string | null;

  @Column({ name: 'emergency_contact_phone', type: 'varchar', length: 20, nullable: true })
  emergencyContactPhone: string | null;

  @Column({ type: 'json', nullable: true })
  violations: Array<{
    date?: string;
    title: string;
    description?: string;
    decisionNumber?: string;
  }> | null;

  @Column({ name: 'resignation_date', type: 'date', nullable: true })
  resignationDate: string | null;

  @Column({ name: 'resignation_reason', type: 'varchar', length: 255, nullable: true })
  resignationReason: string | null;

  @Column({ type: 'varchar', length: 40, default: 'active' })
  status: string;

  @Column({ type: 'text', nullable: true })
  notes: string | null;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
