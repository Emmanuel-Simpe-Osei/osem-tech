import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://osemtech.com/sitemap.xml",
    host: "https://osemtech.com",
  };
}
