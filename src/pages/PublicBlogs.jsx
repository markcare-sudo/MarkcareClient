import React, { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "@/context/GlobalContext";

/* ===============================
   Reusable Blog Card
================================ */
const BlogCard = ({ blog }) => {
  return (
    <Link
      to={`/blogs/${blog.slug || blog.id}`}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm border hover:shadow-xl transition-all duration-300"
    >
      <div className="overflow-hidden">
        <img
          src={blog.featured_image}
          alt={blog.title}
          className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium px-3 py-1 bg-black text-white rounded-full">
            {blog.category}
          </span>
          <span className="text-xs text-gray-500">
            {new Date(blog.created_at).toLocaleDateString()}
          </span>
        </div>

        <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-700 transition">
          {blog.title}
        </h3>

        <p className="text-gray-600 text-sm line-clamp-3">
          {blog.excerpt}
        </p>

        <div className="mt-5 text-sm font-medium text-black">
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

  const { blogs } = useGlobalContext()

  // Only show published blogs
  const publishedBlogs = useMemo(() => {
    return Array.isArray(blogs)
      ? blogs.filter((blog) => blog.status === "published")
      : [];
  }, [blogs]);

  const categories = useMemo(() => {
    const unique = new Set(publishedBlogs.map((b) => b.category));
    return ["all", ...unique];
  }, [publishedBlogs]);

  const filteredBlogs = useMemo(() => {
    return publishedBlogs.filter((blog) => {
      const matchesCategory =
        category === "all" || blog.category === category;

      const matchesSearch =
        blog.title.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [publishedBlogs, category, search]);

  const featuredBlog = filteredBlogs[0];

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-black text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Insights & Articles
        </h1>
        <p className="max-w-2xl mx-auto text-gray-300">
          Discover expert advice, trends, and practical guides to elevate your
          knowledge.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* ================= SEARCH + FILTER ================= */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12">
          <div className="relative w-full md:w-96">
            <Search
              size={16}
              className="absolute left-4 top-3 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  category === cat
                    ? "bg-black text-white"
                    : "bg-white border hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ================= FEATURED BLOG ================= */}
        {featuredBlog && (
          <div className="mb-16">
            <Link
              to={`/blogs/${featuredBlog.slug || featuredBlog.id}`}
              className="grid md:grid-cols-2 gap-10 bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={featuredBlog.featured_image}
                alt={featuredBlog.title}
                className="w-full h-80 object-cover"
              />

              <div className="p-10 flex flex-col justify-center">
                <span className="text-sm text-gray-500 mb-3">
                  Featured Article
                </span>

                <h2 className="text-3xl font-bold mb-4">
                  {featuredBlog.title}
                </h2>

                <p className="text-gray-600 mb-6">
                  {featuredBlog.excerpt}
                </p>

                <span className="text-black font-semibold">
                  Read Full Article →
                </span>
              </div>
            </Link>
          </div>
        )}

        {/* ================= BLOG GRID ================= */}
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            No articles found.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredBlogs.slice(1).map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
