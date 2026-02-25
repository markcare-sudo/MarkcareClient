import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { useGlobalContext } from "@/context/GlobalContext";

/* Dummy Image */
const DUMMY_IMAGE =
  "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1600&auto=format&fit=crop";

export default function BlogDetails() {
  const { slug } = useParams();
  const { fetchBlog, getImageUrl } = useGlobalContext();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadBlog = async () => {
      try {
        setLoading(true);

        const response = await fetchBlog(slug);
        // 👇 adjust based on what your fetchBlog returns
        const blogData = response?.data?.data || response?.data || response;

        if (isMounted) {
          setBlog(blogData);
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    if (slug) {
      loadBlog();
    }

    return () => {
      isMounted = false;
    };
  }, [slug]); // ✅ only slug

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading blog...
      </div>
    );
  }

  /* ================= NOT FOUND ================= */
  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Blog not found.
      </div>
    );
  }

  const image = getImageUrl?.(blog?.featured_media) || DUMMY_IMAGE;
  const tags = blog?.Tags || [];
  const keywords = blog?.Keywords || [];

  const formattedDate = blog?.published_at
    ? new Date(blog.published_at).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Draft";

return (
  <div className="min-h-screen text-white">
    {/* HERO SECTION */}
    <section className="relative w-full h-[420px] md:h-[550px] overflow-hidden">
      <img
        src={image}
        alt={blog?.title || "Blog cover"}
        className="w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        {blog?.category && (
          <span className="mb-5 px-4 py-1 bg-white/10 border border-white/20 rounded-full text-sm backdrop-blur-md">
            {blog.category}
          </span>
        )}

        <h1 className="text-3xl md:text-5xl font-bold max-w-4xl leading-tight mb-6">
          {blog?.title}
        </h1>

        <div className="flex items-center gap-2 text-sm text-gray-300">
          <Calendar size={16} />
          {formattedDate}
        </div>
      </div>
    </section>

    {/* ARTICLE CONTENT */}
    <article className="max-w-5xl mx-auto px-6 py-16 relative -mt-20 z-10">
      <div className="bg-[#111] rounded-3xl p-8 md:p-14 shadow-2xl border border-white/10">

        {/* Back */}
        <Link
          to="/blogs"
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition mb-8"
        >
          <ArrowLeft size={16} />
          Back to Blogs
        </Link>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <Tag size={16} className="text-gray-400" />
            {tags.map((tag) => (
              <Link
                key={tag?.id}
                to={`/blogs?tag=${encodeURIComponent(tag?.slug)}`}
                className="px-4 py-1.5 text-sm bg-white/5 hover:bg-white hover:text-black transition rounded-full border border-white/20"
              >
                #{tag?.name}
              </Link>
            ))}
          </div>
        )}

        {/* Keywords */}
        {keywords.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-10">
            {keywords.map((key) => (
              <span
                key={key?.id}
                className="px-4 py-1 text-sm bg-blue-900/30 text-blue-400 rounded-full border border-blue-700/40"
              >
                {key?.keyword}
              </span>
            ))}
          </div>
        )}

        {/* Excerpt */}
        {blog?.excerpt && (
          <p className="text-xl text-gray-300 leading-relaxed mb-10 border-l-4 border-white pl-6 italic">
            {blog.excerpt}
          </p>
        )}

        {/* Blog Content */}
        <div
          className="prose prose-invert prose-lg max-w-none
                     prose-headings:text-white
                     prose-p:text-gray-300
                     prose-a:text-blue-400
                     prose-strong:text-white
                     prose-img:rounded-2xl
                     prose-img:shadow-lg
                     prose-blockquote:border-white
                     prose-blockquote:text-gray-400"
          dangerouslySetInnerHTML={{ __html: blog?.content || "" }}
        />
      </div>
    </article>

    <div className="h-20" />
  </div>
);
}