import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FullStack.Cafe Remix | Interview Prep Library",
  description:
    "Curated full-stack interview questions with concise answers, filters, and admin curation for premium-ready prep.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-neutral-50 text-neutral-900">
          <Header />
          <main className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
