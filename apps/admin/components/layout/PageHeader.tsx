import type { ReactNode } from "react";

type PageHeaderProps = {
  title: string;
  description: string;
  actions?: ReactNode;
};

export function PageHeader({ title, description, actions }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <p className="text-sm font-semibold text-brand-accent">Admin</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-primary-dark">{title}</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-primary/75">{description}</p>
      </div>
      {actions ? <div className="flex shrink-0 items-center gap-2">{actions}</div> : null}
    </div>
  );
}
