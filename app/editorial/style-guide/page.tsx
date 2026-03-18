import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Definitive Style Guide — Building a Personal Aesthetic",
  description:
    "A comprehensive style guide for developing a personal aesthetic rooted in minimalism, quality, and intentional choices that outlast seasonal trends.",
  openGraph: {
    title: "The Definitive Style Guide | Littleoria",
    description:
      "Develop a personal aesthetic rooted in minimalism, quality, and intentional choices.",
    type: "article",
    locale: "en_CA",
  },
  alternates: {
    canonical: "https://seo-montreal.littleoria.com/editorial/style-guide",
  },
};

const ARTICLE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Definitive Style Guide — Building a Personal Aesthetic",
  description:
    "A comprehensive style guide for developing a personal aesthetic rooted in minimalism and quality.",
  url: "https://seo-montreal.littleoria.com/editorial/style-guide",
  publisher: {
    "@type": "Organization",
    name: "Littleoria",
    url: "https://littleoria.com",
  },
  datePublished: "2026-03-15",
  dateModified: "2026-03-18",
};

export default function StyleGuidePage() {
  return (
    <article className="article-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }}
      />

      <h1>The Definitive Style Guide:<br />Building a Personal Aesthetic</h1>
      <div className="divider" />

      <p>
        Personal style is not an accident. It is not inherited from magazines or absorbed from
        social media feeds. It is constructed — deliberately, piece by piece — through a process
        of observation, experimentation, and honest editing. This guide outlines a framework for
        building an aesthetic that feels authentic to you and endures beyond the current season.
      </p>

      <h2>Step One: The Wardrobe Audit</h2>
      <p>
        Before acquiring anything new, take inventory of what you own. Remove every item from
        your closet and assess each piece against three criteria: Does it fit your body as it is
        now? Have you worn it in the past six months? Does it work with at least three other
        pieces in your collection?
      </p>
      <p>
        If a garment fails all three tests, it has overstayed. The goal is not to discard
        aggressively but to understand where your wardrobe's actual gaps lie. Most people discover
        they own too many variants of the same category (seven striped tops, four near-identical
        jeans) and too few pieces in the categories that would complete their outfits (a proper
        transitional jacket, a well-fitted trouser in a neutral tone).
      </p>

      <h2>Step Two: Define Your Silhouette Language</h2>
      <p>
        Every person gravitates toward certain proportions. Some feel most themselves in
        oversized volume — wide-leg trousers, drop-shoulder coats, relaxed knitwear. Others
        prefer structure — tailored blazers, straight-leg denim, fitted ribbed layers. Neither
        approach is superior; what matters is consistency.
      </p>
      <p>
        A coherent silhouette language means that any two pieces from your wardrobe can share the
        same outfit without contradiction. An oversized linen shirt pairs naturally with wide-leg
        trousers but may overwhelm a slim pencil skirt. Identify your natural proportions and
        build around them.
      </p>

      <h2>Step Three: Establish a Colour Architecture</h2>
      <p>
        The most versatile wardrobes are built on a palette of three to five core tones. For a
        minimalist foundation, consider: a dark anchor (black, charcoal, or deep navy); a light
        counterpoint (white, ivory, or pale grey); a warm mid-tone (camel, oatmeal, or sand);
        and one or two accent colours that complement your complexion.
      </p>
      <p>
        Test your palette by laying out your best-fitting garments and observing which
        combinations feel effortless. The colours that keep appearing together are your natural
        palette. Lean into it rather than fighting it.
      </p>

      <h2>Step Four: The Periodic Edit</h2>
      <p>
        A wardrobe is not a museum — it should evolve. Every three months, revisit your collection
        and remove anything that no longer reflects your current aesthetic or lifestyle. This
        might mean parting with a beautiful but impractical dress that hasn't been worn since its
        purchase, or finally replacing a beloved cardigan whose shape has deteriorated beyond
        recovery.
      </p>
      <p>
        The edit maintains the integrity of the whole. Without it, even the most considered
        wardrobe accumulates drift — well-intentioned purchases that individually make sense but
        collectively dilute the vision.
      </p>

      <h2>Step Five: Buy with Intent</h2>
      <p>
        New acquisitions should fill specific roles, not general desires. Before purchasing, ask:
        What outfit does this complete? What will I pair it with? Does it exist comfortably within
        my established silhouette and colour architecture?
      </p>
      <p>
        If the answer requires multiple hypothetical future purchases ("I'd need a different shoe
        and maybe a new bag"), the garment doesn't fit your current wardrobe — it fits an
        imagined one. Wait until the supporting pieces exist before committing.
      </p>

      <div className="divider" />

      <p>
        Building a personal aesthetic is a process that unfolds over months and years, not
        shopping trips. The reward is a wardrobe that feels like an extension of self — one where
        getting dressed is an act of expression rather than negotiation.
      </p>

      <div style={{ marginTop: "2rem" }}>
        <a href="https://littleoria.com" className="cta-button">
          Explore the Collection
        </a>
      </div>

      <nav style={{ marginTop: "3rem", fontSize: "0.9375rem" }}>
        <p style={{ color: "#6b6b6b", marginBottom: "0.5rem" }}>Continue reading</p>
        <Link href="/editorial/capsule-wardrobe">Capsule Wardrobe</Link>
        {" · "}
        <Link href="/seo/minimalist-fashion">Minimalist Fashion</Link>
        {" · "}
        <Link href="/seo/clothing">Thoughtful Clothing</Link>
      </nav>
    </article>
  );
}
