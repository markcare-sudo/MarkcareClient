import React, { useEffect, useState, useRef } from "react";
import { X, Upload } from "lucide-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useGlobalContext } from "@/context/GlobalContext";

export default function BlogForm({ open, onClose, initialData }) {
  const fileInputRef = useRef();

  const getDefaultForm = () => ({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    status: "draft",
    seo_title: "",
    seo_description: "",
    featured_image: null,
  });

  const [form, setForm] = useState(getDefaultForm());
  const [imagePreview, setImagePreview] = useState(null);
  const { uploadBlog, updateBlog } = useGlobalContext()

  useEffect(() => {
    if (initialData) {
      setForm({
        title: initialData.title ?? "",
        excerpt: initialData.excerpt ?? "",
        content: initialData.content ?? "",
        category: initialData.category ?? "",
        status: initialData.status?.toLowerCase() ?? "draft",
        seo_title: initialData.seo_title ?? "",
        seo_description: initialData.seo_description ?? "",
        featured_image: null,
      });

      setImagePreview(initialData.featured_image ?? null);
    } else {
      setForm(getDefaultForm());
      setImagePreview(null);
    }
  }, [initialData]);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value ?? "",
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setForm((prev) => ({
      ...prev,
      featured_image: file,
    }));

    setImagePreview(URL.createObjectURL(file));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    if (initialData) {
      // ✅ EDIT MODE
      await updateBlog(form, initialData.id);
    } else {
      // ✅ CREATE MODE
      await uploadBlog(form);
    }

    onClose();
  } catch (error) {
    console.error(error);
  }
};


  return (
    <div className="fixed inset-0 z-50 text-black">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Slide Panel */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[600px] bg-gray-50 shadow-2xl overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center px-10 py-6 bg-white border-b sticky top-0 z-10">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              {initialData ? "Edit Blog" : "Create Blog"}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Manage content and publishing settings
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 md:p-10 w-full gap-10">
          <div className="w-full space-y-4">
            {/* Title */}
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Blog Title
            </label>
            <input
              name="title"
              value={form.title ?? ""}
              onChange={handleChange}
              placeholder="Enter blog title..."
              className="w-full text-lg border rounded-xl p-4 focus:ring-2 focus:ring-black outline-none"
              required
            />

            {/* Excerpt */}
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Excerpt
            </label>
            <textarea
              name="excerpt"
              value={form.excerpt ?? ""}
              onChange={handleChange}
              rows={3}
              placeholder="Short summary for preview..."
              className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-black outline-none"
            />

            {/* Content */}
            <label className="block text-sm font-medium text-gray-600 mb-3">
              Content
            </label>

            <div className="rounded-xl overflow-hidden border">
              <ReactQuill
                theme="snow"
                value={form.content ?? ""}
                onChange={(value) =>
                  setForm((prev) => ({ ...prev, content: value ?? "" }))
                }
                className="bg-white"
              />
            </div>

            {/* Featured Image */}
            <h3 className="font-semibold text-gray-800 mb-4">
              Featured Image
            </h3>

            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
            ) : (
              <div className="h-48 flex items-center justify-center border-2 border-dashed rounded-xl text-gray-400 mb-4">
                No Image Selected
              </div>
            )}

            <input
              type="file"
              hidden
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
            />

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full flex items-center justify-center gap-2 border rounded-xl py-2 text-sm font-medium hover:bg-gray-100 transition"
            >
              <Upload size={16} /> Upload Image
            </button>

            {/* Publishing */}
            <h3 className="font-semibold text-gray-800">
              Publishing
            </h3>

            <input
              name="category"
              value={form.category ?? ""}
              onChange={handleChange}
              placeholder="Category"
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-black outline-none"
            />

            <select
              name="status"
              value={form.status ?? "draft"}
              onChange={handleChange}
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-black outline-none"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>

            {/* SEO */}
            <h3 className="font-semibold text-gray-800">
              SEO Settings
            </h3>

            <input
              name="seo_title"
              value={form.seo_title ?? ""}
              onChange={handleChange}
              placeholder="SEO Title"
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-black outline-none"
            />

            <textarea
              name="seo_description"
              value={form.seo_description ?? ""}
              onChange={handleChange}
              rows={3}
              placeholder="SEO Description"
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-black outline-none"
            />

            {/* Submit */}
            <div className="sticky bottom-6">
              <button className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:opacity-90 transition shadow-lg">
                {initialData ? "Update Blog" : "Publish Blog"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
