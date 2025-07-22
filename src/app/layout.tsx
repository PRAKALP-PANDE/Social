import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Social Media App",
  description: "Social media app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="w-full bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px64">
          <Navbar />
        </div>
        <div className="bg-slate-100 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px64">
          {children}
        </div>
      </body>
    </html>
  );
}
