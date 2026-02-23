import React, { useState, useMemo } from "react";
import { Plus, Search } from "lucide-react";
import { useGlobalContext } from "@/context/GlobalContext";
import BlogForm from "@/components/BlogEditor";
import { useSearchParams } from "react-router-dom";

/* =========================
   Reusable Button
========================= */
const Button = ({ children, onClick, variant = "primary", className = "", ...props }) => {
  const base = "px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2";
  const styles = {
    primary: "bg-red-600 text-white hover:bg-red-700 shadow-md shadow-red-600/20",
    outline: "border border-red-500/40 text-white hover:bg-red-600/10",
    success: "bg-green-600 text-white hover:opacity-90",
  };

  return (
    <button onClick={onClick} className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

/* =========================
   Status Badge
========================= */
const StatusBadge = ({ status }) => {
  const styles = {
    published: "bg-green-500/20 text-green-400",
    draft: "bg-yellow-500/20 text-yellow-400",
    archived: "bg-gray-500/20 text-gray-300",
  };

  return (
    <span className={`px-3 py-1 text-xs rounded-full font-medium capitalize ${styles[status?.toLowerCase()] || styles.draft}`}>
      {status}
    </span>
  );
};

/* =========================
   Blog Card
========================= */
const BlogCard = ({ blog, onEdit, onDelete }) => (
  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1">
    <div className="flex justify-between items-start mb-3">
      <h3 className="text-lg font-semibold text-white truncate pr-2">{blog?.title}</h3>
      <StatusBadge status={blog?.status} />
    </div>

    <p className="text-sm text-gray-400 line-clamp-2 mb-3 h-10">
      {blog?.excerpt || "No description provided."}
    </p>

    <div className="flex justify-between items-center text-xs text-gray-500">
      <span className="bg-white/10 px-2 py-0.5 rounded">{blog?.category}</span>
      <span>{blog?.created_at ? new Date(blog.created_at).toLocaleDateString() : "-"}</span>
    </div>

    <div className="flex gap-4 mt-4 pt-4 border-t border-white/5">
      <button onClick={() => onEdit(blog?.id)} className="text-sm text-red-400 font-medium hover:text-red-300 transition">
        Edit
      </button>
      <button onClick={() => onDelete(blog?.id)} className="text-sm text-red-600 font-medium hover:text-red-500 transition">
        Delete
      </button>
    </div>
  </div>
);

/* =========================
   Main Page
========================= */
export default function BlogsListPage() {
  const { blogs = [], deleteBlog } = useGlobalContext();
  const [searchParams, setSearchParams] = useSearchParams();

  // Extract UI state from SearchParams (makes the page shareable/refreshable)
  const filter = searchParams.get("filter") || "all";
  const search = searchParams.get("q") || "";
  const createMode = searchParams.get("create");
  const editId = searchParams.get("edit");


// Find the specific blog object from your global state
const selectedBlog = useMemo(() => {
  return blogs.find((b) => String(b.id) === String(editId));
}, [blogs, editId]);


  const closeForm = () => {
    // Clear only form-related params, keep filters
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("create");
    newParams.delete("edit");
    setSearchParams(newParams);
  };

  const handleParamChange = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value && value !== "all") {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  // Optimized filtering
  const filteredBlogs = useMemo(() => {
    if (!Array.isArray(blogs)) return [];
    return blogs.filter((blog) => {
      const matchesStatus = filter === "all" || blog?.status?.toLowerCase() === filter.toLowerCase();
      const matchesSearch = (blog?.title || "").toLowerCase().includes(search.toLowerCase());
      return matchesStatus && matchesSearch;
    });
  }, [blogs, filter, search]);

  return (
    <div className="min-h-screen bg-black text-white py-10 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Blogs</h1>
            <p className="text-gray-400 text-sm mt-2">Manage and publish your blog posts</p>
          </div>

          <Button onClick={() => handleParamChange("create", "true")}>
            <Plus size={18} /> Create Blog
          </Button>
        </div>

        {/* Filters */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl mb-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex gap-2 flex-wrap">
            {["all", "published", "draft"].map((status) => (
              <Button
                key={status}
                variant={filter === status ? "primary" : "outline"}
                onClick={() => handleParamChange("filter", status)}
                className="capitalize"
              >
                {status}
              </Button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-2.5 text-gray-500" size={16} />
            <input
              type="text"
              placeholder="Search blogs..."
              value={search}
              onChange={(e) => handleParamChange("q", e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-black border border-white/10 focus:outline-none focus:ring-2 focus:ring-red-600 text-white"
            />
          </div>
        </div>

        {/* Blog Grid */}
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20 text-gray-500 border border-dashed border-white/10 rounded-2xl">
            No blogs found matching your criteria.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog) => (
              <BlogCard
                key={blog?.id}
                blog={blog}
                onEdit={(id) => handleParamChange("edit", id)}
                onDelete={(id) => {
                  if (confirm("Are you sure you want to delete this post?")) {
                    deleteBlog(id);
                  }
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Blog Editor Modal/Slide-over */}
<BlogForm
    key={editId || "create"} // Key forces a re-render when switching blogs
    open={createMode === "true" || !!editId}
    initialData={selectedBlog} // Pass the full object here
    onClose={closeForm}
  />
    </div>
  );
}