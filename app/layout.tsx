import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/main/Footer";
import Navabr from "@/components/main/Navbar";
import StarsCanvas from "@/components/main/StarBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdelrahman's Portfolio",
  description: "Abdelrahman's Reda Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <Navabr />
        {children}
        <Footer />
      </body>
    </html>
  );
}
