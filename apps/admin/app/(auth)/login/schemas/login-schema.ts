import { z } from "zod";

export const loginSchema = z.object({
  phone: z.string().min(1, "Vui lòng nhập số điện thoại"),
  password: z.string().min(1, "Vui lòng nhập mật khẩu"),
});

export type LoginPayload = z.infer<typeof loginSchema>;
