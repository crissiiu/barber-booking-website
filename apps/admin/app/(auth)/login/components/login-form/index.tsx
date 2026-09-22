import type { FormEvent } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { LoginPayload } from "@auth/login/schemas/login-schema";
import { Button, FormField } from "@share/components/ui";
import { LogIn } from "lucide-react";

export interface LoginFormProps {
  form: UseFormReturn<LoginPayload>;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  isSubmitting?: boolean;
  authError?: string | null;
}

export function LoginForm({ form, onSubmit, isSubmitting, authError }: LoginFormProps) {
  const { register, formState: { errors } } = form;

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <FormField
        error={errors.phone?.message}
        inputMode="tel"
        label="Số điện thoại"
        placeholder="Nhập số điện thoại"
        type="tel"
        {...register("phone")}
      />
      <FormField
        error={errors.password?.message}
        label="Mật khẩu"
        placeholder="Nhập mật khẩu"
        type="password"
        {...register("password")}
      />
      {authError ? (
        <p className="text-sm font-medium text-red-600">{authError}</p>
      ) : null}
      <Button className="w-full" disabled={isSubmitting} type="submit">
        <LogIn aria-hidden="true" className="h-4 w-4" />
        {isSubmitting ? "Đang đăng nhập..." : "Đăng nhập"}
      </Button>
    </form>
  );
}

export default LoginForm;
