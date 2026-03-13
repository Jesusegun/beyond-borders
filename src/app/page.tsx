import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { EventDetailsSection } from "@/components/sections/EventDetailsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LearnSection } from "@/components/sections/LearnSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { SpeakerSection } from "@/components/sections/SpeakerSection";
import { TicketSection } from "@/components/sections/TicketSection";
import { EVENT_CONTENT, SPEAKER_CONTENT, WHATSAPP_LINK } from "@/lib/event-content";

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://beyond-borders-ecru.vercel.app";
  const eventImageUrl = new URL("/images/divine.png", siteUrl).toString();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: EVENT_CONTENT.heroTitle,
    description: EVENT_CONTENT.heroSubtitle,
    startDate: EVENT_CONTENT.schedule.startDate,
    endDate: EVENT_CONTENT.schedule.endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: {
      "@type": "VirtualLocation",
      url: siteUrl,
    },
    image: [eventImageUrl],
    organizer: {
      "@type": "Organization",
      name: EVENT_CONTENT.eventName,
      url: siteUrl,
    },
    performer: {
      "@type": "Person",
      name: SPEAKER_CONTENT.name,
    },
    offers: {
      "@type": "Offer",
      url: WHATSAPP_LINK,
      price: "10000",
      priceCurrency: "NGN",
      availability: "https://schema.org/InStock",
      validFrom: EVENT_CONTENT.schedule.startDate,
    },
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-primary)]">
      <Navbar />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <HeroSection />
        <LearnSection />
        <SpeakerSection />
        <SocialProofSection />
        <EventDetailsSection />
        <TicketSection />
      </main>
      <Footer />
    </div>
  );
}
