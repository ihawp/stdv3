import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Link from 'next/link';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Warren Chemerika",
  description: "Bananaphone",
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
      <header>
          <nav className={"flex gap-3"}>
              <Link href={"/"}>home</Link>
              <Link href={"/comment"}>comment</Link>
              <Link href={"/leaderboard"}>leaderboard</Link>
              <Link href={"/notifications"}>notifications</Link>
              <Link href={"/profile"}>profile</Link>
              <Link href={"/settings"}>settings</Link>
          </nav>
      </header>
        {children}
      </body>
    </html>
  );
}
