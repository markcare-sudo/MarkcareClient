import React, { useState } from "react";
import { Plus, Search } from "lucide-react";
import { useGlobalContext } from "@/context/GlobalContext";
import BlogForm from "@/components/BlogEditor";
import { useSearchParams } from "react-router-dom";

/* =========================
   Reusable Button
========================= */
const Button = ({ children, onClick, variant = "primary", className = "", ...props }) => {
  const base = "px-4 py-2 rounded-xl font-medium transition-all duration-200";
  const styles = {
    primary: "bg-black text-white hover:opacity-90",
    outline: "border border-gray-300 hover:bg-gray-100",
    success: "bg-green-600 text-white hover:opacity-90",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

/* =========================
   Status Badge
========================= */
const StatusBadge = ({ status }) => {
  const styles = {
    published: "bg-green-100 text-green-700",
    draft: "bg-yellow-100 text-yellow-700",
    archived: "bg-gray-200 text-gray-700",
  };

  return (
    <span className={`px-3 py-1 text-xs rounded-full font-medium ${styles[status] || styles.draft}`}>
      {status}
    </span>
  );
};

/* =========================
   Blog Card
========================= */
const BlogCard = ({ blog, onEdit, onDelete }) => (
  <div className="bg-white rounded-2xl shadow-sm border p-5 hover:shadow-md transition">
    <div className="flex justify-between items-start mb-3">
      <h3 className="text-lg font-semibold">{blog?.title}</h3>
      <StatusBadge status={blog?.status} />
    </div>

    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
      {blog?.excerpt}
    </p>

    <div className="flex justify-between items-center text-xs text-gray-500">
      <span>{blog?.category}</span>
      <span>
        {blog?.created_at
          ? new Date(blog?.created_at).toLocaleDateString()
          : "-"}
      </span>
    </div>

    <div className="flex gap-4 mt-4">
      <button
        onClick={() => onEdit(blog?.id)}
        className="text-sm text-black font-medium underline"
      >
        Edit
      </button>

      <button
        onClick={() => onDelete(blog?.id)}
        className="text-sm text-red-600 font-medium underline"
      >
        Delete
      </button>
    </div>
  </div>
);

/* =========================
   Main Page
========================= */
export default function BlogsListPage() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const { blogs = [], deleteBlog } = useGlobalContext();

  const [searchParams, setSearchParams] = useSearchParams();

  const createMode = searchParams.get("create");
  const editId = searchParams.get("edit");

  // ✅ Safe find (prevents crash if blogs is not array)
  const selectedBlog = Array.isArray(blogs)
    ? blogs.find((b) => String(b.id) === String(editId))
    : null;

  const closeForm = () => {
    setSearchParams({});
  };

  // ✅ Safe filtering
  const filteredBlogs = Array.isArray(blogs)
    ? blogs.filter((blog) => {
        const matchesStatus =
          filter === "all" || blog?.status === filter;

        const matchesSearch = blog?.title
          ?.toLowerCase()
          .includes(search.toLowerCase());

        return matchesStatus && matchesSearch;
      })
    : [];

  return (
    <div className="min-h-screen bg-gray-50 py-4 text-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Blogs</h1>
            <p className="text-gray-600 text-sm">
              Manage and publish your blog posts
            </p>
          </div>

          <Button
            variant="primary"
            className="flex items-center text-center justify-center gap-2"
            onClick={() => setSearchParams({ create: "true" })}
          >
            <Plus size={18} /> Create Blog
          </Button>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border mb-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex gap-2">
            <Button
              variant={filter === "all" ? "primary" : "outline"}
              onClick={() => setFilter("all")}
            >
              All
            </Button>

            <Button
              variant={filter === "published" ? "success" : "outline"}
              onClick={() => setFilter("published")}
            >
              Published
            </Button>

            <Button
              variant={filter === "draft" ? "primary" : "outline"}
              onClick={() => setFilter("draft")}
            >
              Draft
            </Button>
          </div>

          <div className="relative w-full md:w-64">
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search blogs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>

        {/* Blog Grid */}
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            No blogs found.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog) => (
              <BlogCard
                key={blog?.id}
                blog={blog}
                onEdit={(id) => setSearchParams({ edit: id })}
                onDelete={(id) => deleteBlog(id)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Slide Form */}
      <BlogForm
        open={createMode === "true" || !!editId}
        onClose={closeForm}
        initialData={editId ? selectedBlog : null}
      />
    </div>
  );
}
