import type { Metadata, Viewport } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ChatBot from "@/components/chatbot";
import CookieBanner from "@/components/cookie-banner";
import SpiralBackground from "@/components/spiral-background";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VORTEK - Innovation. Design. Impact.",
  description:
    "Transforming ideas into digital realities with cutting-edge tech and nature-inspired creativity. A remote-based tech agency serving UAE, GCC, and global markets.",
  keywords: [
    "tech agency",
    "web development",
    "mobile apps",
    "AI solutions",
    "digital marketing",
    "UAE",
    "GCC",
  ],
};

export const viewport: Viewport = {
  themeColor: "#0a0f0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${inter.variable}`}>
      <body className="antialiased">
        <div className="relative flex flex-col min-h-screen selection:bg-[#39FF14] selection:text-black">
          <SpiralBackground />
          <Navbar />
          <main className="flex-grow relative z-10">{children}</main>
          <Footer />
          <ChatBot />
          <CookieBanner />
        </div>
      </body>
    </html>
  );
}
