import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { EventDetailsSection } from "@/components/sections/EventDetailsSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LearnSection } from "@/components/sections/LearnSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { SpeakerSection } from "@/components/sections/SpeakerSection";
import { TicketSection } from "@/components/sections/TicketSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-primary)]">
      <Navbar />
      <main>
        <HeroSection />
        <LearnSection />
        <SpeakerSection />
        <SocialProofSection />
        <EventDetailsSection />
        <TicketSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
