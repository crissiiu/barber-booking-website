"use client";

import { LoginHeader } from "@auth/login/components/login-header";
import { LoginForm } from "@auth/login/components/login-form";
import { useLoginData } from "@auth/login/hooks/use-login-data";
import { Card, CardContent } from "@share/components/ui";

export function AdminLoginPage() {
  const { form, onSubmit, isSubmitting, authError } = useLoginData();

  return (
    <main className="grid min-h-screen place-items-center bg-background px-4 py-10 text-primary-dark">
      <Card className="w-full max-w-md">
        <CardContent className="p-6">
          <LoginHeader />
          <LoginForm
            authError={authError}
            form={form}
            isSubmitting={isSubmitting}
            onSubmit={onSubmit}
          />
        </CardContent>
      </Card>
    </main>
  );
}

export default AdminLoginPage;

export * from "@auth/login/models/login-models";
export * from "@auth/login/schemas/login-schema";
export * from "@auth/login/services/login-service";
