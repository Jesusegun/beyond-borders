type CtaButtonProps = {
  href: string;
  label: string;
  className?: string;
};

export function CtaButton({ href, label, className = "" }: CtaButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-accent)] px-7 text-sm font-bold uppercase tracking-[0.06em] text-white shadow-[0_12px_24px_rgba(214,85,54,0.25)] transition hover:-translate-y-0.5 hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 ${className}`}
    >
      {label}
    </a>
  );
}
