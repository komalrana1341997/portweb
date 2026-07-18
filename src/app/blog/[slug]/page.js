import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";
import ReactMarkdown from "react-markdown";

export default async function BlogPost({ params }) {
    const { slug } = await params;

    const post = posts.find((p) => p.slug === slug);
    console.log("POSTS:", posts);
    console.log("SLUG:", slug);


    if (!post) return notFound();

    return (
        <div className="max-w-3xl mx-auto py-16 px-6">
            <h1 className="text-3xl font-bold mb-6">{post.title}</h1>

            <div className="blog-content">
                <ReactMarkdown
                    components={{
                        img: ({ node, ...props }) => (
                            <img
                                {...props}
                                style={{
                                    borderRadius: "12px",
                                    margin: "20px 0",
                                    width: "100%",
                                }}
                            />
                        ),
                    }}
                >
                    {post.content}
                </ReactMarkdown>
            </div>
        </div>
    );
}

// ✅ SEO optimization
// ✅ Static paths
export function generateStaticParams() {
  console.log("POSTS:", posts);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// ✅ SEO metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;   // ✅ FIX

  const post = posts.find((p) => p.slug === slug); // ✅ FIX

  if (!post) {
    return { title: "Blog Not Found" };
  }

  return {
    title: post.title,
    description: post.desc || "Blog post", // ⚠️ you used desc not description
  };
}