import type { MetadataRoute } from "next";

const BASE_URL = "https://backlly-hp.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/service",
    "/works",
    "/pricing",
    "/company",
    "/faq",
    "/contact",
    "/download",
  ];

  return routes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
