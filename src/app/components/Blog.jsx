import Link from "next/link";
import { posts } from "../../lib/posts";


export default function Blog() {
  
  return (
    <section className="bg-pink-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">
          Latest <span className="text-blue-600">Blogs</span>
        </h2>

        <p className="text-gray-600 mb-12">
          Tips & insights on web development, SEO and growth 🚀
        </p>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {posts.map((post, index) => (
            <div
            key={post.slug}
              className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-2"
            >
              <p className="text-sm text-gray-400 mb-2">
                {post.date}
              </p>

              <h3 className="text-xl font-semibold mb-3">
                {post.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {post.desc}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-600 font-medium"
              >
                Read More →
              </Link>
            </div>
          ))}

        </div>

        {/* View All Button */}
        <div className="mt-10">
          <Link
            href="/blog"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700"
          >
            View All Blogs →
          </Link>
        </div>

      </div>
    </section>
  );
}