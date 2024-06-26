import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { poppins, shippori_mincho, sue_ellen_francisco } from "@/utils/fonts";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { Navbar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "SSVP-Kelambakkam",
  description:
    "Activities of Society of St Vincent De Paul, Kelambakkam, Divine Mercy Church Conference and an invitation to join.",
  icons: {
    icon: "/SSVP-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "relative bg-[#F5F5F5]",
          fontSans.variable,
          sue_ellen_francisco.variable,
          shippori_mincho.variable,
          poppins.variable
        )}
      >
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
