import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Littleoria — Elevated Minimalist Fashion",
  description:
    "Discover intentionally designed pieces — swimwear, knitwear, and timeless essentials crafted for the modern wardrobe.",
};

export default function HomePage() {
  return (
    <div className="article-container" style={{ textAlign: "center", paddingTop: "6rem", paddingBottom: "6rem" }}>
      <h1 style={{ marginBottom: "1.5rem" }}>Intentional Fashion,<br />Enduring Design</h1>
      <p style={{ maxWidth: "520px", margin: "0 auto 2.5rem", color: "#6b6b6b" }}>
        A curated perspective on minimalist dressing — from seasonal swimwear to
        everyday essentials — designed to transcend trends and simplify your wardrobe.
      </p>

      <nav style={{ display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "center", marginBottom: "3rem" }}>
        <Link href="/seo/swimwear" style={{ fontSize: "1.0625rem" }}>Elevated Swimwear</Link>
        <Link href="/seo/minimalist-fashion" style={{ fontSize: "1.0625rem" }}>Minimalist Fashion</Link>
        <Link href="/seo/clothing" style={{ fontSize: "1.0625rem" }}>Thoughtful Clothing</Link>
        <Link href="/editorial/style-guide" style={{ fontSize: "1.0625rem" }}>The Style Guide</Link>
        <Link href="/editorial/capsule-wardrobe" style={{ fontSize: "1.0625rem" }}>Capsule Wardrobe</Link>
      </nav>

      <a href="https://littleoria.com" className="cta-button">
        Explore the Collection
      </a>
    </div>
  );
}
