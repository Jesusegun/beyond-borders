type SectionHeadingProps = {
  overline?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  overline,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <header className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {overline ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
          {overline}
        </p>
      ) : null}
      <h2 className="text-balance font-display text-3xl leading-tight text-[var(--color-primary)] sm:text-4xl md:text-[2.6rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-base leading-7 text-[var(--color-muted)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
