import { siteUrl } from "@/data/site";

export default function sitemap() {
  return [{ url: siteUrl, changeFrequency: "monthly", priority: 1 }];
}
