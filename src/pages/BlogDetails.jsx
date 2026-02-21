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
    <div className="bg-gray-50 min-h-screen text-black">
      {/* HERO SECTION */}
      <section className="relative w-full h-[400px] md:h-[520px] overflow-hidden">
        <img
          src={image}
          alt={blog?.title || "Blog cover"}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          {blog?.category && (
            <span className="mb-4 px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm">
              {blog.category}
            </span>
          )}

          <h1 className="text-3xl md:text-5xl font-bold max-w-4xl leading-tight mb-6">
            {blog?.title}
          </h1>

          <div className="flex items-center gap-2 text-sm text-gray-200">
            <Calendar size={16} />
            {formattedDate}
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <article className="max-w-6xl mx-auto px-6 py-16 bg-white -mt-16 relative z-10 rounded-3xl shadow-xl">
        <Link
          to="/blogs"
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition mb-6"
        >
          <ArrowLeft size={16} />
          Back to Blogs
        </Link>

        {tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <Tag size={16} className="text-gray-500" />
            {tags.map((tag) => (
              <Link
                key={tag?.id}
                to={`/blogs?tag=${encodeURIComponent(tag?.slug)}`}
                className="px-4 py-1.5 text-sm bg-gray-100 hover:bg-black hover:text-white transition rounded-full border border-gray-200"
              >
                #{tag?.name}
              </Link>
            ))}
          </div>
        )}

        {keywords.length > 0 && (
          <div className="flex flex-wrap items-center gap-3 mb-8">
            {keywords.map((key) => (
              <span
                key={key?.id}
                className="px-4 py-1 text-sm bg-blue-50 text-blue-600 rounded-full"
              >
                {key?.keyword}
              </span>
            ))}
          </div>
        )}

        {blog?.excerpt && (
          <p className="text-xl text-gray-600 leading-relaxed mb-10 border-l-4 border-black pl-6 italic">
            {blog.excerpt}
          </p>
        )}

        <div
          className="prose prose-lg max-w-none
                     prose-headings:font-semibold
                     prose-img:rounded-2xl
                     prose-img:shadow-md
                     prose-a:text-black
                     prose-blockquote:border-black
                     prose-blockquote:text-gray-600"
          dangerouslySetInnerHTML={{ __html: blog?.content || "" }}
        />
      </article>

      <div className="h-20" />
    </div>
  );
}