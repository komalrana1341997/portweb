export default function sitemap() {
     const baseUrl = "https://portweb-drab.vercel.app";

  const blogs = [
    "react-speed",
    "seo-guide",
  ];

  const blogUrls = blogs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://portweb-drab.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://portweb-drab.vercel.app/about",
      lastModified: new Date(),
    },
   
    {
      url: "https://portweb-drab.vercel.app/services",
      lastModified: new Date(),
    },
    {
      url: "https://portweb-drab.vercel.app/project",
      lastModified: new Date(),
    },
    {
      url: "https://portweb-drab.vercel.app/blog",
      lastModified: new Date(),
    },
    {
      url: "https://portweb-drab.vercel.app/contact",
      lastModified: new Date(),
    },
  ];
}