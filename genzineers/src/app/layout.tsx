import type { Metadata } from "next";
import { Anton } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

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
      <body className={anton.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
