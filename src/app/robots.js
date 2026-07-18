export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://portweb-drab.vercel.app/sitemap.xml",
  };
}