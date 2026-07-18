import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://portweb-drab.vercel.app"),

  title: {
    default: "Komal Rana | Web Developer",
    template: "%s | Komal Rana",
  },

   verification: {
    google: "Xv-xvAhWqv3_E1s2",
  },

  description:
    "Komal Rana is a full stack developer specializing in Next.js, React, MongoDB and SEO optimized websites. Explore projects, skills, and get in touch for freelance work, collaborations, and job opportunities.",

  keywords: [
    "Komal Rana",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "MongoDB Developer",
    "Web Developer Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "Freelance Developer",
    "JavaScript Developer",
     "seo websites",
  ],

  authors: [{ name: "Komal Rana" }],
  creator: "Komal Rana",

  metadataBase: new URL("https://portweb-drab.vercel.app"), // 🔥 replace with your real domain

  openGraph: {
    title: "Komal Rana | Full Stack Developer Portfolio",
    description:
      "Explore modern web applications built by Komal Rana using Next.js, React, and MongoDB. Available for freelance and collaboration.",
    url: "https://portweb-drab.vercel.app",
    siteName: "Komal Portfolio",
    images: [
      {
        url: "/favicon.jpg", // 🔥 add image in public folder
        width: 1200,
        height: 630,
        alt: "Komal Rana Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Komal Rana | Full Stack Developer",
    description:
      "Building modern web apps with Next.js, React, and MongoDB. Check out my portfolio and projects.",
    images: ["/favicon.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
     <body className="bg-black text-white">
  {children}
</body>
    </html>
  );
}
