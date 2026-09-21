import type { AdminRole } from "@/shared/lib/permissions";
import { getPermissionsForRoles } from "@/shared/lib/permissions";

export type AdminAccount = {
  id: string;
  fullName: string;
  phone: string;
  password: string;
  roles: AdminRole[];
  title: string;
};

export const ownerAdminAccount: AdminAccount = {
  id: "STAFF-OWNER-001",
  fullName: "SiuBarber Owner",
  phone: "0900000001",
  password: "owner-demo",
  roles: ["owner"],
  title: "Chu so huu he thong",
};

export const demoAdminAccounts: AdminAccount[] = [
  ownerAdminAccount,
  {
    id: "STAFF-MANAGER-001",
    fullName: "Quan ly ca",
    phone: "0900000002",
    password: "manager-demo",
    roles: ["manager", "customer_care"],
    title: "Nhan vien quan ly",
  },
  {
    id: "STAFF-BARBER-001",
    fullName: "Barber demo",
    phone: "0900000003",
    password: "barber-demo",
    roles: ["barber"],
    title: "Nhan vien cat toc",
  },
];

export function findAdminAccount(phone: string, password: string) {
  return demoAdminAccounts.find((account) => account.phone === phone.trim() && account.password === password);
}

export function getAccountPermissions(account: AdminAccount) {
  return getPermissionsForRoles(account.roles);
}
