import type { Metadata } from "next";
import { Bebas_Neue, Permanent_Marker, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marker",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "K3DNZ - 10,000 Degens on Ethereum",
  description: "Nobody knows where we came from. Leave your brain at the door.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${permanentMarker.variable} ${inter.variable} bg-[#0D0D0D] text-[#E8E4DC]`}>
        {children}
      </body>
    </html>
  );
}
