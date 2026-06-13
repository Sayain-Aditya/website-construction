import type { Metadata, Viewport } from "next";
import WhatsAppButton from "./components/WhatsAppButton";
import SmoothScroll from "./components/SmoothScroll";
import BackToTop from "./components/BackToTop";
import Preloader from "./components/Preloader";
import { PreloaderProvider } from "./components/PreloaderContext";
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
  verification: {
    google: "G8MOx2qmD6ItZIr0TNoIOMyVu5-U7Xrk0GTEvVW6D_w",
  },
  metadataBase: new URL('https://amethiyaconstruction.com'),
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png', sizes: 'any' },
      { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
    ],
    shortcut: '/icon.png',
    apple: { url: '/icon.png', sizes: '180x180', type: 'image/png' },
  },
  openGraph: {
    title: 'Amethiya Construction & Developer',
    description: 'Construction, development, Vastu planning, design, estimation, plotting, and turnkey project execution in Gorakhpur.',
    images: [{ url: '/icon.png', width: 512, height: 512, alt: 'Amethiya Construction Logo' }],
    type: 'website',
  },
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
        <PreloaderProvider>
          <Preloader />
          <SmoothScroll />
          {children}
          <WhatsAppButton />
          <BackToTop />
        </PreloaderProvider>
      </body>
    </html>
  );
}
