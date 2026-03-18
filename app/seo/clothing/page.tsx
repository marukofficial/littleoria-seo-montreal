import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thoughtful Clothing | Elevated Minimal Wardrobe",
  description:
    "Clothing built on intention: premium fabrics, enduring silhouettes, and a design philosophy that values longevity over novelty.",
  openGraph: {
    title: "Thoughtful Clothing | Elevated Minimal Wardrobe",
    description:
      "Premium fabrics, enduring silhouettes, and a design philosophy that values longevity over novelty.",
    type: "article",
    locale: "en_CA",
  },
  alternates: {
    canonical: "https://seo-montreal.littleoria.com/seo/clothing",
  },
};

const PAGE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Thoughtful Clothing — Designed for the Everyday",
  description:
    "Clothing built on intention: premium fabrics, enduring silhouettes, and a design philosophy that values longevity over novelty.",
  url: "https://seo-montreal.littleoria.com/seo/clothing",
  isPartOf: {
    "@type": "WebSite",
    name: "Littleoria",
    url: "https://littleoria.com",
  },
};

export default function ClothingPage() {
  return (
    <article className="article-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_JSON_LD) }}
      />

      <h1>Thoughtful Clothing for Considered Living</h1>
      <div className="divider" />

      <p>
        The most powerful wardrobe isn't the largest one — it's the most coherent. Every piece in a
        thoughtful collection exists for a reason: it fits the body it was made for, it works with
        its neighbours, and it ages with dignity rather than deteriorating with use. This is the
        standard we design to.
      </p>

      <h2>Design Without Excess</h2>
      <p>
        Our approach to clothing begins with subtraction. Before a garment enters production, we ask
        what can be removed without diminishing its purpose. Superfluous seams, decorative elements
        that serve no structural function, trims added for visual complexity rather than utility —
        all of these are stripped away.
      </p>
      <p>
        What remains is the essential form: a clean shoulder line, a precise hem weight, a collar
        that sits without adjustment. The result is clothing that doesn't require the wearer to
        manage it — it simply works, wear after wear.
      </p>

      <h2>Material Integrity</h2>
      <p>
        Fabric selection is the most consequential decision in garment design. A poorly chosen
        material undermines even the most elegant pattern. We source from mills with established
        reputations for consistency — Italian wool houses, Japanese cotton weavers, Portuguese
        knit producers — because the provenance of a fibre determines its behaviour for years.
      </p>
      <p>
        We test every fabric for pilling resistance, colorfastness, shrinkage tolerance, and drape
        recovery before approving it for production. This isn't marketing language; it's
        engineering. A garment that pills after three washes or loses its shape after six months
        has failed its purpose regardless of how it looked on day one.
      </p>

      <h2>Fit as Foundation</h2>
      <p>
        Fit is the silent variable that separates wearable clothing from aspirational clothing.
        A garment can be beautiful on a flat surface and unwearable on a body. Our fit process
        spans multiple rounds of adjustment across sample sizes, accounting for movement, posture,
        and the natural variations of human proportion.
      </p>
      <p>
        We design with a moderate ease that accommodates layering without bulk. Armholes are raised
        to allow natural arm movement. Shoulder seams align with the shoulder point rather than
        drifting into fashion-forward territory. The goal is that the wearer forgets about the
        garment entirely — it integrates into the day rather than demanding attention.
      </p>

      <h2>A Palette Built to Coexist</h2>
      <p>
        Our seasonal palettes are not designed in isolation. Each new colour introduction is tested
        against the existing range to ensure it integrates without disruption. A charcoal released
        this season must work alongside the ivory from last season and the navy from the one before.
      </p>
      <p>
        This continuity means that returning customers can add to their wardrobe without replacing
        it. A new piece joins the existing rotation rather than creating an orphan that needs its
        own supporting cast.
      </p>

      <h2>Beyond the Transaction</h2>
      <p>
        Thoughtful clothing extends beyond the point of purchase. We design with care in mind:
        simple wash instructions, fabrics that don't require dry cleaning, construction that
        supports minor repairs rather than replacement. The relationship between wearer and
        garment should deepen over time, not degrade.
      </p>

      <div className="divider" />

      <div style={{ marginTop: "2rem" }}>
        <a href="https://littleoria.com" className="cta-button">
          Explore the Collection
        </a>
      </div>

      <nav style={{ marginTop: "3rem", fontSize: "0.9375rem" }}>
        <p style={{ color: "#6b6b6b", marginBottom: "0.5rem" }}>You may also explore</p>
        <Link href="/seo/swimwear">Elevated Swimwear</Link>
        {" · "}
        <Link href="/seo/minimalist-fashion">Minimalist Fashion</Link>
        {" · "}
        <Link href="/editorial/style-guide">The Style Guide</Link>
        {" · "}
        <Link href="/editorial/capsule-wardrobe">Capsule Wardrobe</Link>
      </nav>
    </article>
  );
}
