import { posts } from "@/lib/posts";


export default function sitemap() {
  const baseUrl = "https://portweb-drab.vercel.app";

 const blogUrls = posts.map((post) => ({
  url: `${baseUrl}/blog/${post.slug}`,
  lastModified: new Date(post.date || Date.now()),
}));

console.log("FINAL SITEMAP:", [
  { url: `${baseUrl}` },
  ...blogUrls,
]);

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },

    // ✅ THIS WAS MISSING
    ...blogUrls,
  ];
}