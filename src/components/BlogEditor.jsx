import React, { useEffect, useState, useRef } from "react";
import { X, Upload } from "lucide-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useGlobalContext } from "@/context/GlobalContext";

const BLOG_CATEGORIES = [
  "Water Treatment Plants",
  "RO Water Purifier",
  "Reverse Osmosis Plant",
  "Residential Elevator",
  "Sewage Treatment Plant",
  "Diesel Generator",
  "Water Softening Plant",
  "AC Service",
];

export default function BlogForm({ open, onClose, initialData }) {
  const fileInputRef = useRef();
  const { getImageUrl, uploadBlog, updateBlog } = useGlobalContext();
  const [tagInput, setTagInput] = useState("");

  const getDefaultForm = () => ({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    status: "draft",
    featured_media: null,
    tags: [],
  });

  const [form, setForm] = useState(getDefaultForm());
  const [imagePreview, setImagePreview] = useState(null);

  /* =============================
     LOAD INITIAL DATA (EDIT MODE)
  ============================== */
  useEffect(() => {
    if (initialData) {
      let parsedTags = [];

      if (initialData.tags) {
        try {
          parsedTags = JSON.parse(initialData.tags);
        } catch {
          parsedTags = [];
        }
      }

      setForm({
        title: initialData.title ?? "",
        excerpt: initialData.excerpt ?? "",
        content: initialData.content ?? "",
        category: initialData.category ?? "",
        status: initialData.status?.toLowerCase() ?? "draft",
        featured_media: null,
        tags: Array.isArray(parsedTags) ? parsedTags : [],
      });

      if (initialData.featured_media) {
        setImagePreview({
          url: getImageUrl(initialData.featured_media),
          type: initialData.media_type || "image",
          isBackend: true,
        });
      } else {
        setImagePreview(null);
      }
    } else {
      setForm(getDefaultForm());
      setImagePreview(null);
    }
  }, [initialData, getImageUrl]);

  /* =============================
     CLEANUP OBJECT URL
  ============================== */
  useEffect(() => {
    return () => {
      if (imagePreview && !imagePreview.isBackend) {
        URL.revokeObjectURL(imagePreview.url);
      }
    };
  }, [imagePreview]);

  if (!open) return null;

  /* =============================
     INPUT HANDLERS
  ============================== */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const trimmed = tagInput.trim().toLowerCase();
      if (!trimmed) return;

      if (!form.tags.includes(trimmed)) {
        setForm((prev) => ({
          ...prev,
          tags: [...prev.tags, trimmed],
        }));
      }

      setTagInput("");
    }
  };

  const removeTag = (tagToRemove) => {
    setForm((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleMediaUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (imagePreview && !imagePreview.isBackend) {
      URL.revokeObjectURL(imagePreview.url);
    }

    const objectUrl = URL.createObjectURL(file);

    setForm((prev) => ({
      ...prev,
      featured_media: file,
    }));

    setImagePreview({
      url: objectUrl,
      type: file.type.startsWith("video") ? "video" : "image",
      isBackend: false,
    });
  };

  /* =============================
     SUBMIT HANDLER
  ============================== */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", form.title);
    formData.append("excerpt", form.excerpt);
    formData.append("content", form.content);
    formData.append("category", form.category);
    formData.append("status", form.status);

    // ✅ Send tags properly
    formData.append("tags", JSON.stringify(form.tags));

    if (form.featured_media instanceof File) {
      formData.append("featured_media", form.featured_media);
    }

    try {
      if (initialData) {
        await updateBlog(formData, initialData.id);
      } else {
        await uploadBlog(formData);
      }
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  /* =============================
     UI
  ============================== */
  return (
    <div className="fixed inset-0 z-50 text-black">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="absolute inset-y-0 right-0 w-full lg:w-[600px] bg-gray-50 shadow-2xl overflow-y-auto">
        <div className="flex justify-between items-center px-10 py-6 bg-white border-b sticky top-0 z-10">
          <h2 className="text-2xl font-semibold">
            {initialData ? "Edit Blog" : "Create Blog"}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-6">
          <label className="text-gray-600 mb-2 block">Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Blog Title"
            className="w-full border rounded-xl p-4"
            required
          />

          <label className="text-gray-600 mb-2 block">Description</label>
          <textarea
            name="excerpt"
            value={form.excerpt}
            onChange={handleChange}
            rows={3}
            placeholder="Description"
            className="w-full border rounded-xl p-4"
          />

          <label className="text-gray-600 pb-2 block">Content</label>
          <ReactQuill
            theme="snow"
            value={form.content}
            onChange={(value) =>
              setForm((prev) => ({ ...prev, content: value }))
            }
          />

          <label className="font-bold mb-2 block">Featured Media</label>

          {imagePreview ? (
            imagePreview.type === "video" ? (
              <video
                src={imagePreview.url}
                controls
                className="w-full h-48 object-cover rounded-xl"
              />
            ) : (
              <img
                src={imagePreview.url}
                alt="Preview"
                className="w-full h-48 object-cover rounded-xl"
              />
            )
          ) : (
            <div className="h-48 flex items-center justify-center border-2 border-dashed rounded-xl text-gray-400">
              No Media Selected
            </div>
          )}

          <input
            type="file"
            hidden
            ref={fileInputRef}
            onChange={handleMediaUpload}
            accept="image/*,video/*"
          />

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full flex items-center justify-center gap-2 border rounded-xl py-2"
          >
            <Upload size={16} /> Upload Image / Video
          </button>

          <label className="font-bold mb-2 block">Publishing</label>

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border rounded-xl p-3 bg-white"
            required
          >
            <option value="">Select Category</option>
            {BLOG_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>

          <label className="font-bold mb-2 block">Tags</label>

          <div className="w-full border rounded-xl p-3 flex flex-wrap gap-2">
            {Array.isArray(form.tags) &&
              form.tags.map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-2 bg-black text-white px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="hover:text-red-400"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}

            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleTagKeyDown}
              placeholder="Type tag and press Enter"
              className="flex-1 outline-none min-w-[120px]"
            />
          </div>

          <button className="w-full bg-black text-white py-3 rounded-xl font-semibold">
            {initialData ? "Update Blog" : "Publish Blog"}
          </button>
        </form>
      </div>
    </div>
  );
}
