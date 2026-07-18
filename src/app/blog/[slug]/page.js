import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";
import ReactMarkdown from "react-markdown";

export default function BlogPost({ params }) {
    const { slug } =  params;

    const post = posts.find((p) => p.slug === slug);


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
export function generateMetadata({ params }) {
    const post = posts.find((p) => p.slug === params.slug);

    if (!post) {
        return {
            title: "Blog Not Found",
        };
    }

    return {
        title: post.title,
        description: post.description || "Blog post",
    };
}