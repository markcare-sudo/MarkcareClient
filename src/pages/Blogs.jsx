import React, { useState } from "react";
import { Plus, Search } from "lucide-react";
import { useGlobalContext } from "@/context/GlobalContext";
import BlogForm from "@/components/BlogEditor";
import { useSearchParams } from "react-router-dom";

/* =========================
   Reusable Button (Red Theme)
========================= */
const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  ...props
}) => {
  const base =
    "px-4 py-2 rounded-xl font-medium transition-all duration-300";

  const styles = {
    primary:
      "bg-red-600 text-white hover:bg-red-700 shadow-md shadow-red-600/20",
    outline:
      "border border-red-500/40 text-white hover:bg-red-600/10",
    success:
      "bg-green-600 text-white hover:opacity-90",
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
   Status Badge (Dark)
========================= */
const StatusBadge = ({ status }) => {
  const styles = {
    published: "bg-green-500/20 text-green-400",
    draft: "bg-yellow-500/20 text-yellow-400",
    archived: "bg-gray-500/20 text-gray-300",
  };

  return (
    <span
      className={`px-3 py-1 text-xs rounded-full font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
};

/* =========================
   Blog Card (Glass Dark)
========================= */
const BlogCard = ({ blog, onEdit, onDelete }) => (
  <div className="bg-white/5 backdrop-blur-xl border border-white/10 
                  rounded-2xl p-5 hover:border-red-500/40 
                  transition-all duration-300 hover:-translate-y-1">

    <div className="flex justify-between items-start mb-3">
      <h3 className="text-lg font-semibold text-white">
        {blog?.title}
      </h3>
      <StatusBadge status={blog?.status} />
    </div>

    <p className="text-sm text-gray-400 line-clamp-2 mb-3">
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
        className="text-sm text-red-400 font-medium hover:text-red-500 transition"
      >
        Edit
      </button>

      <button
        onClick={() => onDelete(blog?.id)}
        className="text-sm text-red-600 font-medium hover:text-red-500 transition"
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

  const selectedBlog = Array.isArray(blogs)
    ? blogs.find((b) => String(b.id) === String(editId))
    : null;

  const closeForm = () => setSearchParams({});

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
    <div className="min-h-screen bg-black text-white py-10 relative overflow-hidden">

      {/* Subtle Dotted Background */}
      <div className="absolute inset-0 opacity-10 
        bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] 
        bg-[size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              Blogs
            </h1>
            <p className="text-gray-400 text-sm mt-2">
              Manage and publish your blog posts
            </p>
          </div>

          <Button
            className="flex items-center justify-center gap-2"
            onClick={() => setSearchParams({ create: "true" })}
          >
            <Plus size={18} /> Create Blog
          </Button>
        </div>

        {/* Filters */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10
                        p-5 rounded-2xl mb-8 flex flex-col md:flex-row 
                        gap-4 md:items-center md:justify-between">

          <div className="flex gap-2 flex-wrap">
            <Button
              variant={filter === "all" ? "primary" : "outline"}
              onClick={() => setFilter("all")}
            >
              All
            </Button>

            <Button
              variant={filter === "published" ? "primary" : "outline"}
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
              className="absolute left-3 top-2.5 text-gray-500"
              size={16}
            />
            <input
              type="text"
              placeholder="Search blogs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl 
                         bg-black border border-white/10
                         focus:outline-none focus:ring-2 
                         focus:ring-red-600 text-white"
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
