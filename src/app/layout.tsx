import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PiAgent | Your AI Agent, In a Box. Private. Local. Yours.",
  description: "Pre-configured Raspberry Pi 5 computers running custom OpenClaw AI agents. Complete privacy, no subscriptions, works offline. Your personal AI assistant that you actually own.",
  keywords: ["AI agent", "Raspberry Pi", "OpenClaw", "local AI", "private AI", "edge computing", "offline AI"],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "PiAgent | Your AI Agent, In a Box",
    description: "Pre-configured AI agents on Raspberry Pi 5. Private, local, and subscription-free.",
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
      <body className={`${inter.variable} font-sans antialiased bg-slate-950 text-slate-50`}>
        {children}
      </body>
    </html>
  );
}
