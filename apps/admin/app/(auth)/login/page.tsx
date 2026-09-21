"use client";

import { LogIn } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Button, Card, CardContent, Input } from "@/components/ui";
import { loginAdmin } from "@/modules/auth/api";

export default function LoginPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);
    const phone = String(formData.get("phone") ?? "");
    const password = String(formData.get("password") ?? "");

    try {
      const result = await loginAdmin({ phone, password });
      window.localStorage.setItem("admin_access_token", result.accessToken);
      window.localStorage.setItem("admin_profile", JSON.stringify(result.admin));
      document.cookie = "admin_session=api; path=/; max-age=86400; SameSite=Lax";
      document.cookie = `admin_phone=${result.admin.phone}; path=/; max-age=86400; SameSite=Lax`;
      document.cookie = `admin_roles=${result.admin.roles.join(",")}; path=/; max-age=86400; SameSite=Lax`;
      const searchParams = new URLSearchParams(window.location.search);
      const next = searchParams.get("next") ?? "/";
      router.replace(next);
      router.refresh();
    } catch {
      setIsSubmitting(false);
      setError("Số điện thoại hoặc mật khẩu không đúng.");
    }
  }

  return (
    <main className="grid min-h-screen place-items-center bg-background px-4 py-10 text-primary-dark">
      <Card className="w-full max-w-md">
        <CardContent className="p-6">
          <div className="mb-6">
            <div className="mb-5 flex items-center gap-3 rounded-[var(--admin-radius)] bg-primary-dark p-3">
              <Image alt="SiuBarber" className="h-12 w-auto" height={48} priority src="/brand/siubarber-logo-white.svg" width={176} />
              <span className="rounded-full bg-primary-dark px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
                Admin
              </span>
            </div>
            <h1 className="text-2xl font-semibold text-primary-dark">Đăng nhập Admin</h1>
            <p className="mt-2 text-sm leading-6 text-primary/75">Đăng nhập bằng số điện thoại và mật khẩu của nhân viên.</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="block text-sm font-medium text-primary-dark">
              Số điện thoại
              <Input className="mt-2" inputMode="tel" name="phone" placeholder="Nhập số điện thoại" type="tel" />
            </label>
            <label className="block text-sm font-medium text-primary-dark">
              Mật khẩu
              <Input className="mt-2" name="password" placeholder="Nhập mật khẩu" type="password" />
            </label>
            {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}
            <Button className="w-full" disabled={isSubmitting} type="submit">
              <LogIn aria-hidden="true" className="h-4 w-4" />
              {isSubmitting ? "Đang đăng nhập..." : "Đăng nhập"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
