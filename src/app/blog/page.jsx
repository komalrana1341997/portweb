import Blog from "../components/Blog";

export const metadata = {
  title: "Blog | Komal Rana",
  description: "Read blogs on web development and SEO.",
};

export default function BlogPage() {
  return (
    <main>
      <Blog />
    </main>
  );
}