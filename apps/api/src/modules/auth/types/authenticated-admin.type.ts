import type { AdminRole } from './admin-role.type.js';

export type AuthenticatedAdmin = {
  sub: string;
  phone: string;
  roles: AdminRole[];
};
