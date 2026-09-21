import type { AdminPermission, AdminRole } from "@/shared/lib/permissions";

export type AdminProfile = {
  id: string;
  fullName: string;
  phone: string;
  roles: AdminRole[];
  permissions: AdminPermission[];
  title: string;
  isActive: boolean;
  employee?: {
    id: string;
    employeeId: string | null;
    lastAndMiddleName: string;
    firstName: string;
    dateOfBirth: string | null;
    gender: string | null;
    hometown: string | null;
    permanentAddress: string | null;
    temporaryAddress: string | null;
    maritalStatus: string | null;
    nationalIdNumber: string | null;
    email: string | null;
    contactPhone: string;
    photoUrl: string | null;
    photoPublicId: string | null;
    educationLevel: string | null;
    religion: string | null;
    professionalSkills: string | null;
    workExperience: string | null;
    position: string;
    contractType: string | null;
    salary: string | null;
    startDate: string | null;
    contractStartDate: string | null;
    contractEndDate: string | null;
    socialInsuranceNumber: string | null;
    taxCode: string | null;
    healthStatus: string | null;
    emergencyContactName: string | null;
    emergencyContactPhone: string | null;
    violations: Array<{
      date?: string;
      title: string;
      description?: string;
      decisionNumber?: string;
    }> | null;
    resignationDate: string | null;
    resignationReason: string | null;
    status: string;
    notes: string | null;
  };
};

export type AdminLoginResponse = {
  accessToken: string;
  admin: AdminProfile;
};
