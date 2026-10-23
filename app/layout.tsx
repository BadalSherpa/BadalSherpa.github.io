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
    images: ["/images/badal-sherpa-2026.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f5f0" },
    { media: "(prefers-color-scheme: dark)", color: "#131412" },
  ],
};

// Runs before first paint: applies the saved (or system) theme, and flags that
// JS + motion are available so reveal targets can start hidden. If GSAP hasn't
// taken over within 4s (slow or failed script), the flag is dropped and
// everything shows.
const bootScript = `(function(){var d=document.documentElement;try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";d.setAttribute("data-theme",t)}catch(e){}if(!matchMedia("(prefers-reduced-motion: reduce)").matches){d.classList.add("js");setTimeout(function(){d.classList.remove("js")},4000)}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
