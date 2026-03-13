import { Container } from "@/components/ui/Container";
import { EVENT_CONTENT } from "@/lib/event-content";

export function Footer() {
  return (
    <footer className="border-t border-black/10 py-8">
      <Container className="flex flex-col items-center justify-between gap-4 text-center text-sm text-[var(--color-muted)] sm:flex-row sm:text-left">
        <p>(c) {new Date().getFullYear()} {EVENT_CONTENT.eventName}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#top" className="font-semibold text-[var(--color-primary)] hover:text-[var(--color-accent)]">
            Back to top
          </a>
        </div>
      </Container>
    </footer>
  );
}
