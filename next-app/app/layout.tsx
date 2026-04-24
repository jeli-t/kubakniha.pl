import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
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
  metadataBase: new URL("https://kubakniha.pl"),
  title: "Treningi badmintona Katowice | Jakub Knihinicki",
  description: "Treningi badmintona w Katowicach dla dzieci i dorosłych. Zajęcia indywidualne lub w grupie 2-4 osób z instruktorem Jakubem Knihinickim w Centrum Sportu Bażantowo.",
  keywords: [
    "treningi badmintona Katowice",
    "badminton Katowice",
    "instruktor badmintona Katowice",
    "nauka badmintona",
    "trening badmintona dla dzieci",
    "trening badmintona dla dorosłych",
    "Centrum Sportu Bażantowo",
    "Jakub Knihinicki",
  ],
  authors: [{ name: "Jakub Knihinicki" }],
  creator: "Jakub Knihinicki",
  publisher: "Jakub Knihinicki",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Treningi badmintona Katowice | Jakub Knihinicki",
    description: "Nauka badmintona w Katowicach dla dzieci i dorosłych. Treningi indywidualne lub w grupie 2-4 osób w Centrum Sportu Bażantowo.",
    url: "/",
    siteName: "Jakub Knihinicki - Instruktor badmintona",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Jakub Knihinicki - treningi badmintona w Katowicach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Treningi badmintona Katowice | Jakub Knihinicki",
    description: "Treningi badmintona w Katowicach dla dzieci i dorosłych z instruktorem Jakubem Knihinickim.",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" data-theme="badminton">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <div></div>
      </body>
    </html>
  );
}
