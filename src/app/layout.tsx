import type { Metadata, Viewport } from "next";
import WhatsAppButton from "./components/WhatsAppButton";
import SmoothScroll from "./components/SmoothScroll";
import BackToTop from "./components/BackToTop";
import Preloader from "./components/Preloader";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Amethiya Construction & Developer",
  description: "Construction, development, Vastu planning, design, estimation, plotting, and turnkey project execution in Gorakhpur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full w-full antialiased`}
    >
      <body className="min-h-full w-full flex flex-col overflow-x-hidden">
        <Preloader />
        <SmoothScroll />
        {children}
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
