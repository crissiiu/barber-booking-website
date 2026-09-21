export type AdminRole =
  | "owner"
  | "manager"
  | "barber"
  | "relaxation_staff"
  | "customer_care"
  | "trainee";

export type AdminPermission =
  | "*"
  | "dashboard:read"
  | "staff:manage"
  | "roles:manage"
  | "bookings:read"
  | "bookings:write"
  | "customers:read"
  | "customers:write"
  | "barbers:read"
  | "barbers:write"
  | "relaxation:read"
  | "relaxation:write"
  | "services:read"
  | "services:write"
  | "banners:read"
  | "banners:write"
  | "payments:read"
  | "payments:write"
  | "settings:manage";

export const roleLabels: Record<AdminRole, string> = {
  owner: "Owner - Toan quyen",
  manager: "Nhan vien quan ly",
  barber: "Nhan vien cat toc",
  relaxation_staff: "Nhan vien thu gian",
  customer_care: "Nhan vien cham soc khach hang",
  trainee: "Nhan vien thuc tap",
};

export const rolePermissions: Record<AdminRole, AdminPermission[]> = {
  owner: ["*"],
  manager: [
    "dashboard:read",
    "staff:manage",
    "bookings:read",
    "bookings:write",
    "customers:read",
    "customers:write",
    "barbers:read",
    "barbers:write",
    "services:read",
    "services:write",
    "payments:read",
  ],
  barber: ["dashboard:read", "bookings:read", "bookings:write", "customers:read", "barbers:read"],
  relaxation_staff: ["dashboard:read", "bookings:read", "bookings:write", "customers:read", "relaxation:read", "relaxation:write"],
  customer_care: ["dashboard:read", "bookings:read", "bookings:write", "customers:read", "customers:write"],
  trainee: ["dashboard:read", "bookings:read", "customers:read", "services:read"],
};

export function getPermissionsForRoles(roles: AdminRole[]) {
  const permissions = new Set<AdminPermission>();

  for (const role of roles) {
    for (const permission of rolePermissions[role] ?? []) {
      permissions.add(permission);
    }
  }

  return Array.from(permissions);
}

export function hasPermission(roles: AdminRole[], permission: AdminPermission) {
  const permissions = getPermissionsForRoles(roles);
  return permissions.includes("*") || permissions.includes(permission);
}
