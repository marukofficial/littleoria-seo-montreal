import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Elevated Swimwear | Elevated Minimal Wardrobe",
  description:
    "Refined swimwear designed with intention — clean silhouettes, premium fabrics, and timeless shapes that move effortlessly from poolside to promenade.",
  openGraph: {
    title: "Elevated Swimwear | Elevated Minimal Wardrobe",
    description:
      "Refined swimwear designed with intention — clean silhouettes, premium fabrics, and timeless shapes.",
    type: "article",
    locale: "en_CA",
  },
  alternates: {
    canonical: "https://seo-montreal.littleoria.com/seo/swimwear",
  },
};

const PAGE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Elevated Swimwear — Minimalist Resort Pieces",
  description:
    "Refined swimwear designed with intention — clean silhouettes, premium fabrics, and timeless shapes.",
  url: "https://seo-montreal.littleoria.com/seo/swimwear",
  isPartOf: {
    "@type": "WebSite",
    name: "Littleoria",
    url: "https://littleoria.com",
  },
};

export default function SwimwearPage() {
  return (
    <article className="article-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_JSON_LD) }}
      />

      <h1>Elevated Swimwear for the Modern Wardrobe</h1>
      <div className="divider" />

      <p>
        The best swimwear operates on the same principles as the best clothing: clean lines,
        intentional construction, and materials that honour the body rather than compete with it.
        At Littleoria, we approach resort and swim pieces with the same rigour we bring to every
        garment in our collection — because what you wear in summer should feel just as considered
        as what you wear in autumn.
      </p>

      <h2>The Case for Minimalist Swimwear</h2>
      <p>
        Trend-driven swimwear has a half-life measured in weeks. A neon cutout suit may photograph
        well under July light, but by the following season it sits unworn in a drawer, overtaken by
        the next viral shape. Minimalist swimwear rejects that cycle entirely.
      </p>
      <p>
        A well-designed one-piece in matte black or warm ivory becomes a recurring character in your
        summers — versatile enough for a hotel pool, structured enough for a harbour-side lunch,
        refined enough to pair with a linen wrap and low sandals for an evening aperitif. The
        hallmark of enduring swimwear is restraint: a silhouette that flatters without forcing, a
        neckline that suggests without revealing, a fabric weight that holds its shape across salt,
        chlorine, and sun.
      </p>

      <h2>Fabric and Construction</h2>
      <p>
        Premium swim fabrics are engineered, not simply chosen. We source Italian-milled nylon blends
        with built-in UV protection and chlorine resistance — the kind of technical performance that
        extends garment life from one season to five. Flatlock seams eliminate chafing. A moderate
        compression offers gentle support without the rigidity of underwire.
      </p>
      <p>
        Lining matters as much as the exterior. Double-lined panels in the torso prevent
        transparency when wet, while single-lined sections at the hip allow freedom of movement.
        These are the invisible decisions that separate considered swimwear from fast disposables.
      </p>

      <h2>Silhouettes That Transcend Seasons</h2>
      <p>
        Our swim collection prioritises three foundational shapes: the sculpted one-piece with a
        high neckline and open back; the classic triangle bikini in a refined matte finish; and the
        square-neck tank suit that works equally well beneath a sheer cover-up or on its own.
      </p>
      <p>
        Each shape has been fit-tested across a broad range of body types. The goal is universal
        flattery through proportion rather than padding — lines that elongate the torso, cuts that
        balance the shoulder-to-hip ratio, and waistlines that sit naturally without elastic pressure.
      </p>

      <h2>From Water to Wardrobe</h2>
      <p>
        The most practical swimwear doubles as a foundational layer. A high-neck one-piece becomes
        a bodysuit under high-waisted trousers. A sleek bikini top substitutes for a bralette beneath
        a relaxed blazer. Designing with this crossover in mind means every swim piece earns its
        place in your suitcase — and in your everyday rotation.
      </p>

      <h2>The Colour Philosophy</h2>
      <p>
        We limit our swim palette to tones that exist comfortably against skin: soft white, warm
        sand, deep navy, matte black, and a single seasonal accent chosen for its longevity. These
        are shades that photograph without dating, that complement rather than dominate, and that
        look as polished in their third summer as their first.
      </p>

      <div className="divider" />

      <p>
        Swimwear is one of the most personal garments in your wardrobe. It should feel like an
        extension of your aesthetic, not a seasonal costume. Explore the full collection and discover
        pieces designed to last well beyond a single summer.
      </p>

      <div style={{ marginTop: "2rem" }}>
        <a href="https://littleoria.com/swimwear" className="cta-button">
          Shop Swimwear
        </a>
      </div>

      <nav style={{ marginTop: "3rem", fontSize: "0.9375rem" }}>
        <p style={{ color: "#6b6b6b", marginBottom: "0.5rem" }}>You may also explore</p>
        <Link href="/seo/minimalist-fashion">Minimalist Fashion</Link>
        {" · "}
        <Link href="/seo/clothing">Thoughtful Clothing</Link>
        {" · "}
        <Link href="/editorial/style-guide">The Style Guide</Link>
        {" · "}
        <Link href="/editorial/capsule-wardrobe">Capsule Wardrobe</Link>
      </nav>
    </article>
  );
}
