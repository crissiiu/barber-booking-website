import type { ReactNode } from "react";

type FormFieldProps = {
  children: ReactNode;
  description?: string;
  error?: string;
  htmlFor?: string;
  label: string;
};

export function FormField({
  children,
  description,
  error,
  htmlFor,
  label,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-primary-dark" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
      {description ? <p className="text-xs text-slate-500">{description}</p> : null}
      {error ? (
        <p className="text-xs font-medium text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
