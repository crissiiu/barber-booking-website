type SectionTitleProps = {
  action?: React.ReactNode;
  description?: string;
  eyebrow?: string;
  title: string;
};

export function SectionTitle({
  action,
  description,
  eyebrow,
  title,
}: SectionTitleProps) {
  return (
    <div className="mb-7 flex flex-col gap-4">
      <div className="w-full">
        {eyebrow ? (
          <p className="mb-2 ml-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            {eyebrow}
          </p>
        ) : null}
        <div className="flex w-full items-center justify-between gap-4 mb-7 md:mb-auto">
          <div className="flex min-w-0 items-center gap-3 text-2xl md:text-4xl">
            <span
              aria-hidden
              className="h-5 md:h-7 w-1 shrink-0 bg-[#9cc7e8]"
            />
            <h2 className="mb-1! min-w-0 text-2xl font-extrabold uppercase leading-none tracking-normal text-primary md:text-4xl">
              {title}
            </h2>
          </div>
          {action ? <div className="shrink-0">{action}</div> : null}
        </div>
        {description ? (
          <p className="ml-4 mt-3 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
