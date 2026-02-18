import React, { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "@/context/GlobalContext";

/* ===============================
   Reusable Blog Card (Dark Theme)
================================ */
const BlogCard = ({ blog }) => {
  const { getImageUrl } = useGlobalContext();

  return (
    <Link
      to={`/blogs/${blog?.slug || blog?.id}`}
      className="group bg-white/5 backdrop-blur-xl 
                 border border-white/10 
                 rounded-3xl overflow-hidden 
                 hover:border-red-500/40 
                 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="overflow-hidden">
        <img
          src={getImageUrl(blog?.featured_media)}
          alt={blog?.title}
          className="w-full h-60 object-cover 
                     group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium px-3 py-1 
                           bg-red-600/20 text-red-400 rounded-full">
            {blog?.category}
          </span>

          <span className="text-xs text-gray-500">
            {new Date(blog?.created_at).toLocaleDateString()}
          </span>
        </div>

        <h3 className="text-xl font-semibold mb-3 
                       text-white group-hover:text-red-400 transition">
          {blog?.title}
        </h3>

        <p className="text-gray-400 text-sm line-clamp-3">
          {blog?.excerpt}
        </p>

        <div className="mt-5 text-sm font-medium text-red-500">
          Read More →
        </div>
      </div>
    </Link>
  );
};

/* ===============================
   Main Public Blogs Page
================================ */
export default function PublicBlogs() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const { blogs, getImageUrl } = useGlobalContext();

  const publishedBlogs = useMemo(() => {
    return Array.isArray(blogs)
      ? blogs.filter((blog) => blog?.status === "published")
      : [];
  }, [blogs]);

  const categories = useMemo(() => {
    const unique = new Set(publishedBlogs.map((b) => b.category));
    return ["all", ...unique];
  }, [publishedBlogs]);

  const filteredBlogs = useMemo(() => {
    return publishedBlogs.filter((blog) => {
      const matchesCategory =
        category === "all" || blog?.category === category;

      const matchesSearch =
        blog?.title.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [publishedBlogs, category, search]);

  const featuredBlog = filteredBlogs[0];

  return (
    <div className="min-h-screen text-white relative overflow-hidden">

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 
        bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] 
        bg-[size:24px_24px]" />

      {/* ================= HERO SECTION ================= */}
      <section className="relative py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Insights & Articles
        </h1>
        <p className="max-w-2xl mx-auto text-gray-400">
          Discover expert advice, trends, and practical guides to elevate your
          knowledge.
        </p>
      </section>

      <div className="relative max-w-7xl mx-auto px-4 pb-24">

        {/* ================= SEARCH + FILTER ================= */}
        <div className="flex flex-col md:flex-row gap-6 
                        justify-between items-center mb-14">

          <div className="relative w-full md:w-96">
            <Search
              size={16}
              className="absolute left-4 top-3 text-gray-500"
            />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-2xl 
                         bg-white/5 border border-white/10 
                         focus:outline-none focus:ring-2 
                         focus:ring-red-600 text-white"
            />
          </div>

          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === cat
                    ? "bg-red-600 text-white"
                    : "bg-white/5 border border-white/10 hover:bg-red-600/10 text-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ================= FEATURED BLOG ================= */}
        {featuredBlog && (
          <div className="mb-20">
            <Link
              to={`/blogs/${featuredBlog?.slug || featuredBlog?.id}`}
              className="grid md:grid-cols-2 gap-10 
                         bg-white/5 backdrop-blur-xl 
                         border border-white/10 
                         rounded-3xl overflow-hidden 
                         hover:border-red-500/40 
                         transition-all duration-300"
            >
              <img
                src={getImageUrl(featuredBlog?.featured_media)}
                alt={featuredBlog?.title}
                className="w-full h-80 object-cover"
              />

              <div className="p-10 flex flex-col justify-center">
                <span className="text-sm text-red-400 mb-3">
                  Featured Article
                </span>

                <h2 className="text-3xl font-bold mb-4 text-white">
                  {featuredBlog?.title}
                </h2>

                <p className="text-gray-400 mb-6">
                  {featuredBlog?.excerpt}
                </p>

                <span className="text-red-500 font-semibold">
                  Read Full Article →
                </span>
              </div>
            </Link>
          </div>
        )}

        {/* ================= BLOG GRID ================= */}
        {filteredBlogs.length <= 1 ? (
          <div className="text-center py-20 text-gray-500">
            No articles found.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredBlogs.slice(1).map((blog) => (
              <BlogCard key={blog?.id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
