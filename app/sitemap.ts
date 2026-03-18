import type { MetadataRoute } from "next";

const BASE_URL = "https://seo-montreal.littleoria.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/seo/swimwear`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/seo/minimalist-fashion`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/seo/clothing`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/editorial/style-guide`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/editorial/capsule-wardrobe`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
