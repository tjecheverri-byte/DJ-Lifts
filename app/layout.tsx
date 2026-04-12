import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DJ Lifts | Houston's Open Format DJ",
  description:
    "Houston's open format DJ for private events, weddings, corporate events, nightlife, and market pop-ups. Book DJ Lifts (Tristan Echeverri) for your next event.",
  keywords: [
    "DJ Houston",
    "Houston DJ",
    "open format DJ",
    "wedding DJ Houston",
    "club DJ Houston",
    "DJ Lifts",
    "Tristan Echeverri",
  ],
  openGraph: {
    title: "DJ Lifts | Houston's Open Format DJ",
    description:
      "House. Latin. Hip Hop. EDM. No playlists — just vibes. Book DJ Lifts for your next event.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${bebasNeue.variable} font-sans antialiased bg-zinc-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
