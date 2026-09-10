import type { Metadata, Viewport } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-onest",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://subeeshkrishna.com"),
  title: "Subeesh Krishna T | Cinematographer, Video Editor, Director",
  description:
    "Portfolio of Subeesh Krishna T — Cinematographer, Video Editor, and Director with 5+ years of experience across commercials, brand films, and documentary productions.",
  keywords: [
    "Subeesh Krishna",
    "Cinematographer",
    "Video Editor",
    "Director",
    "Camera Operator",
    "DaVinci Resolve",
    "Commercial Films",
    "Brand Films",
    "Portfolio",
  ],
  authors: [{ name: "Subeesh Krishna T" }],
  creator: "Subeesh Krishna T",
  openGraph: {
    title: "Subeesh Krishna T | Cinematographer, Video Editor, Director",
    description:
      "Cinematographer, video editor, and director with 5+ years of experience across 300+ brands.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/hero-subeesh.jpg",
        width: 1200,
        height: 630,
        alt: "Subeesh Krishna T - Cinematographer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subeesh Krishna T | Cinematographer, Video Editor, Director",
    description:
      "Cinematographer, video editor, and director with 5+ years of experience.",
    images: ["/images/hero-subeesh.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${onest.variable} scroll-smooth`}>
      <body className="bg-black text-white antialiased min-h-screen selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
