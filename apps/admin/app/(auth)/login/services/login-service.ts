import { DEFAULT_REDIRECT_PATH, LOGIN_STORAGE_KEYS, SESSION_MAX_AGE_SECONDS } from "@auth/login/constants/login-constants";
import type { AdminLoginResponse, AdminProfile, LoginPayload } from "@auth/login/models/login-models";
import { httpClient } from "@share/lib/http-client";

export const loginService = {
  async loginAdmin(payload: LoginPayload): Promise<AdminLoginResponse> {
    const response = await httpClient.post<AdminLoginResponse>("/auth/admin/login", payload);
    return response.data;
  },

  async getAdminProfile(): Promise<AdminProfile> {
    const response = await httpClient.get<AdminProfile>("/auth/admin/me");
    return response.data;
  },

  async uploadEmployeePhoto(employeeProfileId: string, file: File) {
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
  },

  persistAdminSession(result: AdminLoginResponse) {
    window.localStorage.setItem(LOGIN_STORAGE_KEYS.ACCESS_TOKEN, result.accessToken);
    window.localStorage.setItem(LOGIN_STORAGE_KEYS.PROFILE, JSON.stringify(result.admin));
    document.cookie = `${LOGIN_STORAGE_KEYS.COOKIE_SESSION}=api; path=/; max-age=${SESSION_MAX_AGE_SECONDS}; SameSite=Lax`;
    document.cookie = `${LOGIN_STORAGE_KEYS.COOKIE_PHONE}=${result.admin.phone}; path=/; max-age=${SESSION_MAX_AGE_SECONDS}; SameSite=Lax`;
    document.cookie = `${LOGIN_STORAGE_KEYS.COOKIE_ROLES}=${result.admin.roles.join(",")}; path=/; max-age=${SESSION_MAX_AGE_SECONDS}; SameSite=Lax`;
  },

  getLoginRedirectPath(): string {
    if (typeof window === "undefined") return DEFAULT_REDIRECT_PATH;
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get("next") ?? DEFAULT_REDIRECT_PATH;
  },
};
