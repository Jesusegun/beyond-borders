import { NAV_LINKS, WHATSAPP_LINK, EVENT_CONTENT } from "@/lib/event-content";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[color:rgba(245,241,233,0.88)] backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-4">
        <a href="#top" className="font-display text-xl font-semibold text-[var(--color-primary)] sm:text-2xl">
          {EVENT_CONTENT.eventName}
        </a>

        <nav aria-label="Section navigation" className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[var(--color-muted)] transition hover:text-[var(--color-primary)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <CtaButton href={WHATSAPP_LINK} label="Reserve Your Seat" className="min-h-10 px-5 text-xs" />
      </Container>
    </header>
  );
}
