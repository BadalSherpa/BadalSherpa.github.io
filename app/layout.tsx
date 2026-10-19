import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://badalsherpa.github.io"),
  title: "Badal Sherpa — Lead Software Engineer",
  description:
    "Badal Sherpa is a Lead Software Engineer in Gurugram building fast, accessible, scalable products with React.js, Next.js, TypeScript and Node.js.",
  keywords: ["Badal Sherpa", "Lead Software Engineer", "React", "Next.js", "TypeScript", "Frontend", "Portfolio"],
  authors: [{ name: "Badal Sherpa" }],
  openGraph: {
    title: "Badal Sherpa — Lead Software Engineer",
    description: "React.js · Next.js · TypeScript · Node.js. Building calm, fast interfaces for complex products.",
    url: "https://badalsherpa.github.io",
    siteName: "Badal Sherpa",
    images: ["/images/badal.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07060d",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
