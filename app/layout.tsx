import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Newsreader, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const body = Schibsted_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

const code = IBM_Plex_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const display = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
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
  themeColor: "#0e0e0c",
};

// Applies the saved theme before first paint so there's no flash. Dark is the default.
const themeScript = `(function(){try{if(localStorage.getItem("theme")==="light")document.documentElement.setAttribute("data-theme","light")}catch(e){}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${body.variable} ${code.variable} ${display.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
