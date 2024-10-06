import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import classes from "./page.module.css";
import { Navbar } from "@/app/UI/Navbar/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Treningi badmintona | Jakub Knihinicki",
  description: "Chcesz poprawić swoją technikę, szybkość i wytrzymałość na korcie? Zapraszam na treningi indywidualne z badmintona - od podstawowych zasad gry, po zaawansowane strategie taktyczne. Gwarantuję profesjonalne podejście i dobrą zabawę!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <div className={classes.bg_fade_in}></div>
      </body>
    </html>
  );
}
