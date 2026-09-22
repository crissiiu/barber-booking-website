import type { ReactNode } from "react";

type PagePlaceholderProps = {
  title: string;
  description: ReactNode;
  mainClassName?: string;
  maxWidthClassName?: string;
  titleClassName?: string;
};

export function PagePlaceholder({
  description,
  mainClassName,
  maxWidthClassName = "max-w-5xl",
  title,
  titleClassName = "text-primary-dark",
}: PagePlaceholderProps) {
  return (
    <main className={mainClassName ?? `mx-auto w-full ${maxWidthClassName} px-6 py-12`}>
      <h1 className={`text-3xl font-extrabold ${titleClassName}`}>{title}</h1>
      <p className="mt-3 text-slate-600">{description}</p>
    </main>
  );
}
