import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Monish J B | Flowground Developer Portfolio",
  description: "Flowground developer portfolio of Monish J B. Building intelligent AI systems, real-time computer vision pipelines, multi-agent workflows, and Data Structures & Algorithms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-white text-neutral-900 antialiased selection:bg-neutral-900 selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
