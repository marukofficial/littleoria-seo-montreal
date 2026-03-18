import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Capsule Wardrobe Guide | Elevated Minimal Wardrobe",
  description:
    "A structured approach to building a capsule wardrobe: the essential pieces, the system of rotation, and the discipline of purposeful curation.",
  openGraph: {
    title: "Capsule Wardrobe Guide | Elevated Minimal Wardrobe",
    description:
      "The essential pieces, the system of rotation, and the discipline of purposeful curation.",
    type: "article",
    locale: "en_CA",
  },
  alternates: {
    canonical: "https://seo-montreal.littleoria.com/editorial/capsule-wardrobe",
  },
};

const ARTICLE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Art of the Capsule Wardrobe — A Practical Framework",
  description:
    "A structured approach to building a capsule wardrobe with essential pieces and purposeful curation.",
  url: "https://seo-montreal.littleoria.com/editorial/capsule-wardrobe",
  publisher: {
    "@type": "Organization",
    name: "Littleoria",
    url: "https://littleoria.com",
  },
  datePublished: "2026-03-15",
  dateModified: "2026-03-18",
};

export default function CapsuleWardrobePage() {
  return (
    <article className="article-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }}
      />

      <h1>The Art of the Capsule Wardrobe</h1>
      <div className="divider" />

      <p>
        A capsule wardrobe is not a restriction — it is a system. At its best, it eliminates
        the daily negotiation of "what to wear" by ensuring that every available option works.
        The concept has been co-opted by minimalism influencers and reduced to numbered lists,
        but its true value lies in the discipline of selection: choosing pieces that serve
        multiple contexts without compromise.
      </p>

      <h2>The Foundation Layer</h2>
      <p>
        Every capsule begins with foundational pieces — the garments that appear in 70% of your
        outfits. These are the most critical investments because their quality directly determines
        the quality of your overall presentation. A foundation layer typically includes:
      </p>
      <p>
        A well-fitted trouser in a neutral tone. A clean white or ivory top in a fabric that drapes
        without clinging. A knit pullover in a mid-weight that layers under outerwear and over
        shirting. A dark denim in a silhouette that flatters without trend-signalling. And a shoe
        — ideally in leather — that transitions from daytime to evening without looking out of place
        in either context.
      </p>

      <h2>The Extension Layer</h2>
      <p>
        Extensions add range without redundancy. These are the pieces that differentiate a Monday
        from a Thursday and a work lunch from a weekend walk. Extensions include: a structured
        blazer or unlined jacket; a second knit in a contrasting weight or texture; a casual layer
        like a relaxed cardigan or overshirt; and one or two skirts or alternative bottoms that
        offer silhouette variety.
      </p>
      <p>
        The rule of extensions is interoperability. Each piece must combine with every foundation
        piece to create a coherent outfit. If a new acquisition only works with one trouser and
        one top, it belongs in a different wardrobe.
      </p>

      <h2>The Seasonal Insert</h2>
      <p>
        Capsule wardrobes are often presented as static, but weather demands adaptation. Rather
        than maintaining multiple seasonal capsules, use a single insert layer: a heavy coat for
        winter, a light trench or windbreaker for spring, swimwear and breathable fabrics for
        summer, and a mid-weight knit for autumn transitions.
      </p>
      <p>
        The insert is stored out of sight during off-seasons and rotated in without disrupting
        the core system. This keeps the active wardrobe compact while accommodating climate reality.
      </p>

      <h2>The Colour System</h2>
      <p>
        Capsule wardrobes fail when their colour palette lacks internal logic. A collection of
        individually beautiful pieces in conflicting tones creates the same decision paralysis as
        a full closet. The solution is systematic: choose a base (dark neutral), a complement
        (light neutral), a connector (warm mid-tone), and a single accent.
      </p>
      <p>
        Every new purchase must exist within this system. This is the hardest discipline — resisting
        a beautiful olive jacket because your palette is built on navy, or passing on a coral knit
        because your accent colour is rust. The system rewards consistency over impulse.
      </p>

      <h2>Maintenance and Evolution</h2>
      <p>
        A capsule wardrobe is alive. It requires regular attention: quarterly edits, seasonal
        swaps, and honest assessment of each piece's condition and relevance. When a foundation
        piece wears out, it is replaced with the best available equivalent — not upgraded into
        something more exciting, not diversified into two alternatives, but replaced with the
        closest match to what worked.
      </p>
      <p>
        Evolution happens gradually. Over years, the palette may warm or cool, the silhouette
        may relax or sharpen, and the proportions may shift. These changes are organic, driven
        by lived experience rather than external trend pressure. The capsule grows with its
        owner.
      </p>

      <div className="divider" />

      <div style={{ marginTop: "2rem" }}>
        <a href="https://littleoria.com" className="cta-button">
          Explore the Collection
        </a>
      </div>

      <nav style={{ marginTop: "3rem", fontSize: "0.9375rem" }}>
        <p style={{ color: "#6b6b6b", marginBottom: "0.5rem" }}>You may also explore</p>
        <Link href="/editorial/style-guide">The Style Guide</Link>
        {" · "}
        <Link href="/seo/swimwear">Elevated Swimwear</Link>
        {" · "}
        <Link href="/seo/minimalist-fashion">Minimalist Fashion</Link>
        {" · "}
        <Link href="/seo/clothing">Thoughtful Clothing</Link>
      </nav>
    </article>
  );
}
