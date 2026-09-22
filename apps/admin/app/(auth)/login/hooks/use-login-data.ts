"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { loginSchema, type LoginPayload } from "@auth/login/schemas/login-schema";
import { loginService } from "@auth/login/services/login-service";
import { useLoginStore } from "@auth/login/stores/login-store";
import { ERROR_MESSAGES } from "@share/constants";

export function useLoginData() {
  const router = useRouter();
  const setCurrentUser = useLoginStore((state) => state.setCurrentUser);

  const form = useForm<LoginPayload>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  const loginMutation = useMutation({
    mutationFn: (payload: LoginPayload) => loginService.loginAdmin(payload),
    onSuccess: (data) => {
      loginService.persistAdminSession(data);
      setCurrentUser(data.admin);
      router.replace(loginService.getLoginRedirectPath());
      router.refresh();
    },
  });

  const onSubmit = form.handleSubmit((data: LoginPayload) => {
    loginMutation.mutate(data);
  });

  return {
    form,
    onSubmit,
    isSubmitting: loginMutation.isPending || form.formState.isSubmitting,
    authError: loginMutation.isError ? ERROR_MESSAGES.INVALID_CREDENTIALS : null,
  };
}

export default useLoginData;
