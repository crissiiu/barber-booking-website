import Image from "next/image";
import { LOGIN_DESCRIPTION, LOGIN_TITLE } from "@auth/login/constants/login-constants";

export function LoginHeader() {
  return (
    <div className="mb-6">
      <div className="mb-5 flex items-center gap-3 rounded-[var(--admin-radius)] bg-primary-dark p-3">
        <Image
          alt="SiuBarber"
          className="h-12 w-auto"
          height={48}
          priority
          src="/brand/siubarber-logo-white.svg"
          width={176}
        />
        <span className="rounded-full bg-primary-dark px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
          Admin
        </span>
      </div>
      <h1 className="text-2xl font-semibold text-primary-dark">{LOGIN_TITLE}</h1>
      <p className="mt-2 text-sm leading-6 text-primary/75">{LOGIN_DESCRIPTION}</p>
    </div>
  );
}

export default LoginHeader;
