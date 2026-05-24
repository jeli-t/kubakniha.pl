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
  description: "Treningi badmintona w Katowicach dla dzieci i dorosłych. Zajęcia indywidualne lub w grupach 2-4 osób z certyfikowanym instruktorem. Centrum Sportu Bażantowo i Hala Basen Zadole.",
  keywords: [
    "treningi badmintona Katowice",
    "badminton Katowice",
    "instruktor badmintona Katowice",
    "trener badmintona Katowice",
    "nauka badmintona",
    "lekcje badmintona Katowice",
    "trening badmintona dla dzieci",
    "trening badmintona dla dorosłych",
    "badminton dla początkujących Katowice",
    "badminton Śląsk",
    "Centrum Sportu Bażantowo badminton",
    "Hala Basen Zadole badminton",
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
    description: "Nauka badmintona w Katowicach dla dzieci i dorosłych. Treningi indywidualne lub w grupach 2-4 osób. Centrum Sportu Bażantowo i Hala Basen Zadole.",
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
    description: "Treningi badmintona w Katowicach dla dzieci i dorosłych z certyfikowanym instruktorem Jakubem Knihinickim.",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://kubakniha.pl/#business",
      "name": "Jakub Knihinicki - Treningi Badmintona Katowice",
      "description": "Treningi badmintona w Katowicach dla dzieci i dorosłych. Zajęcia indywidualne lub w grupach 2-4 osobowych z certyfikowanym instruktorem.",
      "url": "https://kubakniha.pl",
      "telephone": "+48782795254",
      "image": "https://kubakniha.pl/opengraph-image.png",
      "priceRange": "$$",
      "areaServed": {
        "@type": "City",
        "name": "Katowice"
      },
      "location": [
        {
          "@type": "Place",
          "name": "Centrum Sportu Bażantowo",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "ul. Pijarska 3",
            "addressLocality": "Katowice",
            "addressRegion": "Śląskie",
            "addressCountry": "PL"
          }
        },
        {
          "@type": "Place",
          "name": "Hala Basen Zadole",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "ul. Wczasowa 8A",
            "addressLocality": "Katowice",
            "addressRegion": "Śląskie",
            "addressCountry": "PL"
          }
        }
      ],
      "sameAs": [
        "https://www.instagram.com/j.knihinicki_badminton/",
        "https://www.facebook.com/profile.php?id=61552974901285"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://kubakniha.pl/#person",
      "name": "Jakub Knihinicki",
      "jobTitle": "Instruktor Badmintona",
      "url": "https://kubakniha.pl",
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "name": "Certyfikat Instruktora Badmintona",
        "dateCreated": "2023-04"
      },
      "sameAs": [
        "https://www.instagram.com/j.knihinicki_badminton/",
        "https://www.facebook.com/profile.php?id=61552974901285"
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" data-theme="badminton">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
