import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cat Town - Pixel Art Adventure Game",
  description: "Welcome to Cat Town - A Pixel Art Adventure where you can explore, fish, and build your dream town with adorable pixel cats!",
  openGraph: {
    title: 'Cat Town - Pixel Art Adventure Game',
    description: 'Explore, fish, and build your dream town with adorable pixel cats!',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cat Town - Pixel Art Adventure Game',
    description: 'Explore, fish, and build your dream town with adorable pixel cats!',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
