import { MetadataRoute } from "next";
import { getPosts } from "@/lib/sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.vocasafewatch.net";

  // 1. Static Pages Array
  const staticSlugs = [
    "",
    "/about",
    "/features",
    "/impact",
    "/partner",
    "/contact-us",
    "/resources",
    "/crowdfunding",
    "/co-design",
    "/shareyourvoice",
    "/blog",
    "/accessibility-statement",
    "/privacy-policy",
    "/terms-of-sale",
  ];

  const staticMaps = staticSlugs.map((slug) => ({
    url: `${baseUrl}${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: slug === "" ? 1.0 : 0.8,
  }));

  // 2. Dynamic Blog Posts Array from Sanity/Fallback
  try {
    const posts = await getPosts();
    const postMaps = posts.map((post) => ({
      url: `${baseUrl}/post/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
    return [...staticMaps, ...postMaps];
  } catch (e) {
    console.error("❌ Sitemap Generation Warning (CMS Fetch Failed):", e);
    return staticMaps;
  }
}
