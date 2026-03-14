import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { EVENT_CONTENT } from "@/lib/event-content";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://beyond-borders-ecru.vercel.app"
  ),
  title: {
    default: EVENT_CONTENT.heroTitle,
    template: "%s | Beyond Borders",
  },
  description: EVENT_CONTENT.heroSubtitle,
  keywords: [
    "scholarships",
    "conferences",
    "funded opportunities",
    "migration",
    "career growth",
    "global opportunities",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: EVENT_CONTENT.heroTitle,
    description: EVENT_CONTENT.heroSubtitle,
    url: "/",
    siteName: EVENT_CONTENT.eventName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero.jpeg",
        width: 1200,
        height: 630,
        alt: EVENT_CONTENT.eventName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: EVENT_CONTENT.heroTitle,
    description: EVENT_CONTENT.heroSubtitle,
    images: ["/images/hero.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${playfairDisplay.variable} antialiased`}>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
