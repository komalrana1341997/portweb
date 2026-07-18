import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";

export default async function BlogPost({ params }) {
  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);


  if (!post) return notFound();

  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>

      <p className="text-gray-700 leading-relaxed">
        {post.content}
      </p>
    </div>
  );
}

// ✅ SEO optimization
export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}