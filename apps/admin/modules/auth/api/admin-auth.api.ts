import { httpClient } from "@/shared/lib/http-client";
import type { AdminLoginResponse, AdminProfile } from "../types/admin-auth.type";

type LoginAdminPayload = {
  phone: string;
  password: string;
};

export async function loginAdmin(payload: LoginAdminPayload) {
  const response = await httpClient.post<AdminLoginResponse>("/auth/admin/login", payload);
  return response.data;
}

export async function getAdminProfile() {
  const response = await httpClient.get<AdminProfile>("/auth/admin/me");
  return response.data;
}

export async function uploadEmployeePhoto(employeeProfileId: string, file: File) {
  const formData = new FormData();
  formData.append("photo", file);

  const response = await httpClient.post<{
    employeeId: string;
    photoUrl: string;
    photoPublicId: string;
  }>(`/employees/${employeeProfileId}/photo`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
}
