import type { MetadataRoute } from "next";
import { nav, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return nav.map((item) => ({
    url: new URL(item.href, site.url).toString(),
    changeFrequency: item.href === "/karriere" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
