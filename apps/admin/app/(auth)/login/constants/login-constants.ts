export const LOGIN_TITLE = "Đăng nhập Admin";
export const LOGIN_SUBTITLE = "Đăng nhập bằng số điện thoại và mật khẩu của nhân viên.";
export const LOGIN_DESCRIPTION = LOGIN_SUBTITLE;

export const LOGIN_STORAGE_KEYS = {
  ACCESS_TOKEN: "admin_access_token",
  PROFILE: "admin_profile",
  COOKIE_SESSION: "admin_session",
  COOKIE_PHONE: "admin_phone",
  COOKIE_ROLES: "admin_roles",
} as const;

export const SESSION_MAX_AGE_SECONDS = 86_400;
export const DEFAULT_REDIRECT_PATH = "/";
export const LOGIN_ERROR_INVALID_CREDENTIALS = "Số điện thoại hoặc mật khẩu không đúng.";
