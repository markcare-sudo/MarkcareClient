import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { useGlobalContext } from "@/context/GlobalContext";

/* Dummy Image */
const DUMMY_IMAGE =
  "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1600&auto=format&fit=crop";

export default function BlogDetails() {
  const { slug } = useParams();
  const { blogs } = useGlobalContext()

  const blog = blogs.find(
    (b) => b.slug === slug || String(b.id) === slug
  );

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Blog not found.
      </div>
    );
  }

//   const image = blog.featured_image || DUMMY_IMAGE;
    const image =  DUMMY_IMAGE;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[400px] md:h-[520px] overflow-hidden">
        <img
          src={image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          <span className="mb-4 px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm">
            {blog.category}
          </span>

          <h1 className="text-3xl md:text-5xl font-bold max-w-4xl leading-tight mb-6">
            {blog.title}
          </h1>

          <div className="flex items-center gap-2 text-sm text-gray-200">
            <Calendar size={16} />
            {new Date(blog.created_at).toLocaleDateString()}
          </div>
        </div>
      </section>

      {/* ================= ARTICLE CONTENT ================= */}
      <article className="max-w-3xl mx-auto px-6 py-16 bg-white -mt-16 relative z-10 rounded-3xl shadow-xl">
        
        {/* Back Button */}
        <Link
          to="/blogs"
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition mb-8"
        >
          <ArrowLeft size={16} />
          Back to Blogs
        </Link>

        {/* Excerpt */}
        {blog.excerpt && (
          <p className="text-xl text-gray-600 leading-relaxed mb-10 border-l-4 border-black pl-6 italic">
            {blog.excerpt}
          </p>
        )}

        {/* Main Content */}
        <div
          className="prose prose-lg max-w-none
                     prose-headings:font-semibold
                     prose-img:rounded-2xl
                     prose-img:shadow-md
                     prose-a:text-black
                     prose-blockquote:border-black
                     prose-blockquote:text-gray-600"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>

      {/* ================= BOTTOM SPACING ================= */}
      <div className="h-20" />
    </div>
  );
}
