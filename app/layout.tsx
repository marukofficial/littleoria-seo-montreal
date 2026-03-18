import type { Metadata } from "next";
import "./globals.css";

const STORE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: "Littleoria",
  url: "https://littleoria.com",
  description:
    "Elevated minimalist fashion — timeless pieces designed with intention.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Montreal",
    addressRegion: "QC",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.5017,
    longitude: -73.5673,
  },
  areaServed: {
    "@type": "City",
    name: "Montreal",
  },
};

const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Littleoria",
  url: "https://littleoria.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://littleoria.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Littleoria",
  url: "https://littleoria.com",
  logo: "https://littleoria.com/logo.png",
  sameAs: [
    "https://www.instagram.com/littleoria",
    "https://www.pinterest.com/littleoria",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://seo-montreal.littleoria.com"),
  title: {
    default: "Littleoria — Elevated Minimalist Fashion",
    template: "%s | Littleoria",
  },
  description:
    "Timeless, intentionally designed pieces for the modern wardrobe. Premium fabrics, minimalist silhouettes, enduring quality.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Littleoria",
  },
  alternates: {
    canonical: "https://seo-montreal.littleoria.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STORE_JSON_LD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSON_LD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header
      style={{
        borderBottom: "1px solid #e5e5e0",
        padding: "1.25rem 1.5rem",
        textAlign: "center",
      }}
    >
      <a
        href="https://littleoria.com"
        style={{
          textDecoration: "none",
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: "1.375rem",
          fontWeight: 500,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#1a1a1a",
        }}
      >
        Littleoria
      </a>
    </header>
  );
}

function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #e5e5e0",
        padding: "2.5rem 1.5rem",
        textAlign: "center",
        fontSize: "0.8125rem",
        color: "#6b6b6b",
      }}
    >
      <nav style={{ marginBottom: "1rem", display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
        <a href="/seo/swimwear">Swimwear</a>
        <a href="/seo/minimalist-fashion">Minimalist Fashion</a>
        <a href="/seo/clothing">Clothing</a>
        <a href="/editorial/style-guide">Style Guide</a>
        <a href="/editorial/capsule-wardrobe">Capsule Wardrobe</a>
      </nav>
      <p style={{ marginBottom: "0.5rem" }}>
        <a href="https://littleoria.com" style={{ textDecoration: "none" }}>
          littleoria.com
        </a>
      </p>
      <p>&copy; {new Date().getFullYear()} Littleoria. All rights reserved.</p>
    </footer>
  );
}
