import React, { useEffect, useState, useRef, useMemo } from "react";
import { X, Upload, Loader2 } from "lucide-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useGlobalContext } from "@/context/GlobalContext";

const BLOG_CATEGORIES = [
  "Water Treatment Plants", "RO Water Purifier", "Reverse Osmosis Plant",
  "Residential Elevator", "Sewage Treatment Plant", "Diesel Generator",
  "Water Softening Plant", "AC Service", "Solar Power System",
  "Refrigerators", "UPS System", "Geysers", "Solar walls",
  "Washing Machine", "TV", "Effluent Treatment Plant"
];

export default function BlogForm({ open, onClose, initialData }) {
  const fileInputRef = useRef();
  const { getImageUrl, uploadBlog, updateBlog, tags, keywords } = useGlobalContext();

  const getDefaultForm = () => ({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    status: "draft",
    featured_media: null,
    alt_text: "",
    tags: [],
    keywords: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState(getDefaultForm());
  const [imagePreview, setImagePreview] = useState(null);
  const [tagInput, setTagInput] = useState("");
  const [keywordInput, setKeywordInput] = useState("");

  // Quill Config
  const quillConfig = useMemo(() => ({
    modules: {
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        ["clean"],
      ],
    },
    formats: [
      "header", "bold", "italic", "underline", "strike",
      "color", "background", "list", "bullet", "link", "image",
    ]
  }), []);

  /* ================= LOAD INITIAL DATA ================= */
  useEffect(() => {
    if (!open) return;

    if (initialData) {
      // Map Tags and Keywords safely from potentially complex backend objects
      const parsedTags = Array.isArray(initialData.Tags)
        ? initialData.Tags.map(t => (typeof t === 'object' ? t.name : t)).filter(Boolean)
        : [];

      const parsedKeywords = Array.isArray(initialData.Keywords)
        ? initialData.Keywords.map(k => (typeof k === 'object' ? (k.keyword) : k)).filter(Boolean)
        : [];

      setForm({
        title: initialData.title || "",
        excerpt: initialData.excerpt || initialData.description || "",
        content: initialData.content || initialData.blog_content || "",
        category: initialData.category || "",
        status: initialData.status?.toLowerCase() || "draft",
        alt_text: initialData.alt_text || "",
        tags: parsedTags,
        keywords: parsedKeywords,
        featured_media: null, // Keep null unless user uploads a NEW file
      });

      if (initialData.featured_media) {
        setImagePreview({
          url: getImageUrl(initialData.featured_media),
          type: initialData.media_type || "image",
          isExisting: true
        });
      }
    } else {
      // Reset for "Create" mode
      setForm(getDefaultForm());
      setImagePreview(null);
    }

    // Cleanup Revoke Object URLs to prevent memory leaks
    return () => {
      if (imagePreview?.url && !imagePreview.isExisting) {
        URL.revokeObjectURL(imagePreview.url);
      }
    };
  }, [initialData, open]); // Only trigger when the form opens or data changes

  if (!open) return null;

  /* ================= HANDLERS ================= */
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (imagePreview?.url && !imagePreview.isExisting) {
      URL.revokeObjectURL(imagePreview.url);
    }

    setForm(prev => ({ ...prev, featured_media: file }));
    setImagePreview({
      url: URL.createObjectURL(file),
      type: file.type.startsWith("video") ? "video" : "image",
      isExisting: false,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        if (key === "tags" || key === "keywords") {
          formData.append(key, JSON.stringify(value));
        } else if (key === "featured_media") {
          if (value instanceof File) formData.append("featured_media", value);
        } else {
          formData.append(key, value || "");
        }
      });

      if (initialData?.id) {
        await updateBlog(formData, initialData.id);
      } else {
        await uploadBlog(formData);
      }
      onClose();
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const addItem = (type, value) => {
    const trimmed = value.trim().toLowerCase();
    if (!trimmed || form[type].includes(trimmed)) return;
    setForm(prev => ({ ...prev, [type]: [...prev[type], trimmed] }));
    type === "tags" ? setTagInput("") : setKeywordInput("");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Drawer */}
      <div className="relative w-full lg:w-[700px] bg-[#0a0a0a] border-l border-white/10 shadow-2xl flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-center px-8 py-6 border-b border-white/10 bg-[#0a0a0a] z-10">
          <h2 className="text-2xl font-semibold text-white">
            {initialData ? "Edit Blog Post" : "Create New Post"}
          </h2>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-white transition">
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Form Area */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">

          <div className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-400">Title</label>
              <input
                value={form.title}
                onChange={(e) => setForm(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Enter a catchy title..."
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-red-600 text-white"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-400">Excerpt</label>
              <textarea
                value={form.excerpt}
                onChange={(e) => setForm(prev => ({ ...prev, excerpt: e.target.value }))}
                rows={3}
                placeholder="Brief summary of the post..."
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-red-600 text-white"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-400">Full Content</label>
              <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
                <ReactQuill
                  theme="snow"
                  value={form.content}
                  onChange={(val) => setForm(prev => ({ ...prev, content: val }))}
                  modules={quillConfig.modules}
                  formats={quillConfig.formats}
                  className="bg-transparent text-white quill-dark"
                />
              </div>
            </div>

            {/* Media Preview / Upload */}
            <div>
              <label className="block mb-3 text-sm font-medium text-gray-400">Featured Media</label>
              <div
                onClick={() => fileInputRef.current.click()}
                className="relative h-64 w-full rounded-xl overflow-hidden border-2 border-dashed border-white/10 flex flex-col items-center justify-center cursor-pointer hover:bg-white/5 transition group"
              >
                {imagePreview ? (
                  imagePreview.type === "video" ? (
                    <video src={imagePreview.url} className="w-full h-full object-cover" />
                  ) : (
                    <img src={imagePreview.url} alt="Preview" className="w-full h-full object-cover" />
                  )
                ) : (
                  <div className="text-center text-gray-500">
                    <Upload size={40} className="mx-auto mb-2 opacity-50" />
                    <span>Click to upload media</span>
                  </div>
                )}
                {imagePreview && (
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <p className="text-white text-sm font-medium">Click to change media</p>
                  </div>
                )}
              </div>
              <input type="file" hidden ref={fileInputRef} accept="image/*,video/*" onChange={handleFileChange} />

              <input
                placeholder="SEO Alt Text"
                value={form.alt_text}
                onChange={(e) => setForm(prev => ({ ...prev, alt_text: e.target.value }))}
                className="mt-3 w-full bg-white/5 border border-white/10 rounded-lg p-2 text-sm text-white focus:ring-1 focus:ring-red-600 outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-sm text-gray-400">Category</label>
                <select
                  value={form.category}
                  onChange={(e) => setForm(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full bg-[#121212] border border-white/10 rounded-xl p-3 text-white focus:ring-2 focus:ring-red-600 outline-none"
                  required
                >
                  <option value="">Select...</option>
                  {BLOG_CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-400">Status</label>
                <select
                  value={form.status}
                  onChange={(e) => setForm(prev => ({ ...prev, status: e.target.value }))}
                  className="w-full bg-[#121212] border border-white/10 rounded-xl p-3 text-white focus:ring-2 focus:ring-red-600 outline-none"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
            </div>

            {/* Tags & Keywords Section */}
            <div className="space-y-6">
              <MetaInput
                label="Tags"
                input={tagInput}
                setInput={setTagInput}
                items={form.tags}
                addItem={(val) => addItem("tags", val)}
                removeItem={(tag) => setForm(prev => ({ ...prev, tags: prev.tags.filter(t => t !== tag) }))}
                color="red"
                allSuggestions={tags} // Data from context
              />
              <MetaInput
                label="SEO Keywords"
                input={keywordInput}
                setInput={setKeywordInput}
                items={form.keywords}
                addItem={(val) => addItem("keywords", val)}
                removeItem={(kw) => setForm(prev => ({ ...prev, keywords: prev.keywords.filter(k => k !== kw) }))}
                color="blue"
                allSuggestions={keywords} // Data from context
              />
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 sticky bottom-0 bg-[#0a0a0a] pb-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-700 py-4 rounded-xl font-bold transition flex items-center justify-center gap-2 text-white"
            >
              {isSubmitting ? (
                <><Loader2 className="animate-spin" size={20} /> Processing...</>
              ) : (
                initialData ? "Update Blog Post" : "Publish Now"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


// function MetaInput({ label, input, setInput, items, addItem, removeItem, color, allSuggestions = [] }) {
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const suggestionRef = useRef(null);

//   const colorClasses = color === "red"
//     ? "bg-red-600/20 text-red-400 border-red-600/30"
//     : "bg-blue-600/20 text-blue-400 border-blue-600/30";

//   // Filter logic: Handles both .name (tags) and .keyword (keywords)
//   const filteredSuggestions = useMemo(() => {
//     if (!input.trim()) return [];
//     const search = input.toLowerCase();

//     return allSuggestions.filter(s => {
//       // 1. Determine which property to use (name or keyword)
//       const suggestionText = s.name || s.keyword;
      
//       // 2. Safety check: if neither exists, skip this item
//       if (!suggestionText) return false;

//       const normalizedText = suggestionText.toLowerCase();

//       // 3. Match against search and exclude already selected items
//       return (
//         normalizedText.includes(search) &&
//         !items.some(alreadySelected => alreadySelected.toLowerCase() === normalizedText)
//       );
//     }).slice(0, 5); 
//   }, [input, allSuggestions, items]);

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (suggestionRef.current && !suggestionRef.current.contains(e.target)) {
//         setShowSuggestions(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div className="space-y-2 relative" ref={suggestionRef}>
//       <label className="block text-sm text-gray-400 font-medium">{label}</label>
//       <div className="w-full bg-white/5 border border-white/10 rounded-xl p-3 flex flex-wrap gap-2 focus-within:ring-2 focus-within:ring-white/10">
//         {items.map((item) => (
//           <div key={item} className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${colorClasses}`}>
//             {item}
//             <button type="button" onClick={() => removeItem(item)} className="hover:text-white transition">
//               <X size={12} />
//             </button>
//           </div>
//         ))}
//         <input
//           value={input}
//           onFocus={() => setShowSuggestions(true)}
//           onChange={(e) => {
//             setInput(e.target.value);
//             setShowSuggestions(true);
//           }}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               e.preventDefault();
//               addItem(input);
//               setShowSuggestions(false);
//             }
//           }}
//           placeholder={`Add ${label.toLowerCase()}...`}
//           className="flex-1 bg-transparent outline-none min-w-[150px] text-sm text-white"
//         />
//       </div>

//       {/* Suggestion Dropdown */}
//       {showSuggestions && filteredSuggestions.length > 0 && (
//         <div className="absolute z-[60] w-full mt-1 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-xl overflow-hidden">
//           {filteredSuggestions.map((s) => {
//             // Use whichever display property is available
//             const displayName = s.name || s.keyword;
//             return (
//               <button
//                 key={s.id}
//                 type="button"
//                 className="w-full px-4 py-3 text-left text-sm text-white hover:bg-white/5 transition flex items-center justify-between group"
//                 onClick={() => {
//                   addItem(displayName);
//                   setShowSuggestions(false);
//                 }}
//               >
//                 <span>{displayName}</span>
//                 <span className="text-[10px] text-gray-500 group-hover:text-gray-300">
//                   Use existing
//                 </span>
//               </button>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }


function MetaInput({ label, input, setInput, items, addItem, removeItem, color, allSuggestions = [] }) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionRef = useRef(null);

  const colorClasses = color === "red"
    ? "bg-red-600/20 text-red-400 border-red-600/30"
    : "bg-blue-600/20 text-blue-400 border-blue-600/30";

  // Process strings with commas into multiple items
  const handleCommaSeparatedAdd = (value) => {
    if (!value.includes(',')) {
      addItem(value);
      return;
    }

    // Split by comma, remove empty strings, and trim whitespace
    const parts = value.split(',').map(p => p.trim()).filter(p => p.length > 0);
    parts.forEach(part => addItem(part));
    setInput(""); // Clear input after processing all parts
  };

  const filteredSuggestions = useMemo(() => {
    if (!input.trim()) return [];
    const search = input.toLowerCase();

    return allSuggestions.filter(s => {
      const suggestionText = s.name || s.keyword;
      if (!suggestionText) return false;
      const normalizedText = suggestionText.toLowerCase();
      return (
        normalizedText.includes(search) &&
        !items.some(alreadySelected => alreadySelected.toLowerCase() === normalizedText)
      );
    }).slice(0, 5); 
  }, [input, allSuggestions, items]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (suggestionRef.current && !suggestionRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="space-y-2 relative" ref={suggestionRef}>
      <label className="block text-sm text-gray-400 font-medium">{label}</label>
      <div className="w-full bg-white/5 border border-white/10 rounded-xl p-3 flex flex-wrap gap-2 focus-within:ring-2 focus-within:ring-white/10">
        {items.map((item) => (
          <div key={item} className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${colorClasses}`}>
            {item}
            <button type="button" onClick={() => removeItem(item)} className="hover:text-white transition">
              <X size={12} />
            </button>
          </div>
        ))}
        <input
          value={input}
          onFocus={() => setShowSuggestions(true)}
          onChange={(e) => {
            const val = e.target.value;
            // If the user typed a comma, process it immediately
            if (val.includes(',')) {
              handleCommaSeparatedAdd(val);
              setShowSuggestions(false);
            } else {
              setInput(val);
              setShowSuggestions(true);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleCommaSeparatedAdd(input); // Use the logic here too
              setShowSuggestions(false);
            }
          }}
          placeholder={`Add ${label.toLowerCase()} (separate by comma)...`}
          className="flex-1 bg-transparent outline-none min-w-[150px] text-sm text-white"
        />
      </div>

      {/* Suggestion Dropdown */}
      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className="absolute z-[60] w-full mt-1 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-xl overflow-hidden">
          {filteredSuggestions.map((s) => {
            const displayName = s.name || s.keyword;
            return (
              <button
                key={s.id}
                type="button"
                className="w-full px-4 py-3 text-left text-sm text-white hover:bg-white/5 transition flex items-center justify-between group"
                onClick={() => {
                  addItem(displayName);
                  setShowSuggestions(false);
                  setInput(""); // Ensure input is cleared on selection
                }}
              >
                <span>{displayName}</span>
                <span className="text-[10px] text-gray-500 group-hover:text-gray-300">Use existing</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}