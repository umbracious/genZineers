import type { Metadata } from "next";
import { Anton } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import MobileNavbar from "@/components/mobileNavbar";

const anton = Anton({ subsets: ["latin"], weight:"400" });

export const metadata: Metadata = {
  title: "GenZineers",
  description: "The best place to save your semester",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.className} text-white bg-cover bg-[url('../../public/background.png')] bg-neutral-900 bg-blend-overlay bg-origin-border bg-top`}>
        <Navbar />
        <MobileNavbar/>
        {children}
      </body>
    </html>
  );
}
