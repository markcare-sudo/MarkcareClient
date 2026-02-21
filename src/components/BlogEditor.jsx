












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
  "Solar Power System",
  "Refrigerators",
  "UPS System",
  "Geysers",
];

export default function BlogForm({ open, onClose, initialData }) {
  const fileInputRef = useRef();
  const {
    getImageUrl,
    uploadBlog,
    updateBlog,
    getAllTags,
    getAllKeywords,
  } = useGlobalContext();

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

  const [form, setForm] = useState(getDefaultForm());
  const [imagePreview, setImagePreview] = useState(null);

  const [tagInput, setTagInput] = useState("");
  const [keywordInput, setKeywordInput] = useState("");

  const [allTags, setAllTags] = useState([]);
  const [allKeywords, setAllKeywords] = useState([]);

  
  /* ================= FETCH TAGS & KEYWORDS ================= */
  useEffect(() => {
    const fetchMeta = async () => {
      const tags = await getAllTags?.();
      const keywords = await getAllKeywords?.();
      setAllTags(tags || []);
      setAllKeywords(keywords || []);
    };
    fetchMeta();
  }, []);

  /* ================= LOAD INITIAL DATA ================= */
  // useEffect(() => {
  //   if (initialData) {
  //     let parsedTags = [];
  //     let parsedKeywords = [];

  //     try {
  //       parsedTags = JSON.parse(initialData.tags || "[]");
  //       parsedKeywords = JSON.parse(initialData.keywords || "[]");
  //     } catch {}

  //     setForm({
  //       title: initialData.title ?? "",
  //       excerpt: initialData.excerpt ?? "",
  //       content: initialData.content ?? "",
  //       category: initialData.category ?? "",
  //       status: initialData.status?.toLowerCase() ?? "draft",
  //       featured_media: null,
  //       tags: parsedTags,
  //       keywords: parsedKeywords,
  //     });

  //     if (initialData.featured_media) {
  //       setImagePreview({
  //         url: getImageUrl(initialData.featured_media),
  //         type: initialData.media_type || "image",
  //       });
  //     } else {
  //       setImagePreview(null);
  //     }
  //   } else {
  //     setForm(getDefaultForm());
  //     setImagePreview(null);
  //   }
  // }, [initialData]);


useEffect(() => {
  if (!initialData) {
    setForm(getDefaultForm());
    setImagePreview(null);
    return;
  }

  // ✅ Extract tag names properly
  const parsedTags = Array.isArray(initialData?.Tags)
    ? initialData.Tags
        .map((tag) => tag?.name?.toLowerCase())
        .filter(Boolean)
    : [];

  // ✅ Extract keyword values properly
  const parsedKeywords = Array.isArray(initialData?.Keywords)
    ? initialData.Keywords
        .map((kw) => kw?.keyword?.toLowerCase())
        .filter(Boolean)
    : [];

  setForm((prev) => ({
    ...prev,
    title: initialData.title || "",
    excerpt: initialData.excerpt || "",
    content: initialData.content || "",
    category: initialData.category || "",
    alt_text: initialData.alt_text || "",
    status: initialData.status?.toLowerCase() || "draft",
    featured_media: null,
    tags: parsedTags,
    keywords: parsedKeywords,
  }));

  if (initialData.featured_media) {
    setImagePreview({
      url: getImageUrl(initialData.featured_media),
      type: initialData.media_type || "image",
    });
  } else {
    setImagePreview(null);
  }
}, [initialData]);



  if (!open) return null;

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      if (key === "tags" || key === "keywords") {
        formData.append(key, JSON.stringify(value));
      } else if (key === "featured_media") {
        if (value instanceof File) {
          formData.append("featured_media", value);
        }
      } else {
        formData.append(key, value);
      }
    });


    if (initialData) {
      await updateBlog(formData, initialData.id);
    } else {
      await uploadBlog(formData);
    }

    onClose();
  };

  /* ================= ADD FUNCTIONS ================= */
  const addTag = (value) => {
    const trimmed = value.trim().toLowerCase();
    if (!trimmed || form.tags.includes(trimmed)) return;
    setForm({ ...form, tags: [...form.tags, trimmed] });
    setTagInput("");
  };

  const addKeyword = (value) => {
    const trimmed = value.trim().toLowerCase();
    if (!trimmed || form.keywords.includes(trimmed)) return;
    setForm({ ...form, keywords: [...form.keywords, trimmed] });
    setKeywordInput("");
  };

  return (
    <div className="fixed inset-0 z-50 text-white">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[650px] 
                      bg-black border-l border-white/10 
                      shadow-2xl overflow-y-auto">

        {/* Header */}
        <div className="flex justify-between items-center px-8 py-6 
                        border-b border-white/10 sticky top-0 bg-black z-10">
          <h2 className="text-2xl font-semibold">
            {initialData ? "Edit Blog" : "Create Blog"}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-8">

          {/* Title */}
          <div>
            <label className="block mb-2 text-gray-400">Title</label>
            <input
              value={form.title}
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 
                         rounded-xl p-4 focus:ring-2 focus:ring-red-600"
              required
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block mb-2 text-gray-400">Description</label>
            <textarea
              value={form.excerpt}
              onChange={(e) =>
                setForm({ ...form, excerpt: e.target.value })
              }
              rows={3}
              className="w-full bg-white/5 border border-white/10 
                         rounded-xl p-4 focus:ring-2 focus:ring-red-600"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block mb-2 text-white">Content</label>
            <div className="bg-black rounded-xl overflow-hidden">
              <ReactQuill
                theme="snow"
                value={form.content}
                onChange={(value) =>
                  setForm({ ...form, content: value })
                }
              />
            </div>
          </div>

          {/* Featured Media */}
          <div>
            <label className="block mb-3 text-gray-400">
              Featured Media
            </label>

            {imagePreview ? (
              imagePreview.type === "video" ? (
                <video
                  src={imagePreview.url}
                  controls
                  className="w-full h-56 object-cover rounded-xl border border-white/10"
                />
              ) : (
                <img
                  src={imagePreview.url}
                  alt="Preview"
                  className="w-full h-56 object-cover rounded-xl border border-white/10"
                />
              )
            ) : (
              <div className="h-56 flex items-center justify-center 
                              border-2 border-dashed border-white/20 
                              rounded-xl text-gray-500">
                No Media Selected
              </div>
            )}

            <input
              type="file"
              hidden
              ref={fileInputRef}
              accept="image/*,video/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                setForm({ ...form, featured_media: file });
                setImagePreview({
                  url: URL.createObjectURL(file),
                  type: file.type.startsWith("video")
                    ? "video"
                    : "image",
                });
              }}
            />

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="mt-4 w-full flex items-center justify-center gap-2 
                         bg-gray-700 border border-white/10 
                         hover:border-red-500 hover:bg-red-600/10
                         transition rounded-xl py-3"
            >
              <Upload size={16} />
              Upload Image / Video
            </button>
          </div>

           <div>
            <label className="block mb-2 text-gray-400">Alt Text</label>
            <input
              value={form.alt_text}
              onChange={(e) =>
                setForm({ ...form, alt_text: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 
                         rounded-xl p-4 focus:ring-2 focus:ring-red-600"
              required
            />
          </div>

          {/* Category + Status */}
          <div className="grid md:grid-cols-2 gap-6">
            <select
              value={form.category}
              onChange={(e) =>
                setForm({ ...form, category: e.target.value })
              }
              className="bg-black border border-white/10 
                         rounded-xl p-3 focus:ring-2 focus:ring-red-600"
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
              value={form.status}
              onChange={(e) =>
                setForm({ ...form, status: e.target.value })
              }
              className="bg-black border border-white/10 
                         rounded-xl p-3 focus:ring-2 focus:ring-red-600"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>

          {/* TAGS + KEYWORDS */}
          <MetaInput
            label="Tags"
            input={tagInput}
            setInput={setTagInput}
            items={form.tags}
            addItem={addTag}
            removeItem={(tag) =>
              setForm({ ...form, tags: form.tags.filter((t) => t !== tag) })
            }
            color="red"
          />

          <MetaInput
            label="Keywords"
            input={keywordInput}
            setInput={setKeywordInput}
            items={form.keywords}
            addItem={addKeyword}
            removeItem={(kw) =>
              setForm({
                ...form,
                keywords: form.keywords.filter((k) => k !== kw),
              })
            }
            color="blue"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 
                       py-3 rounded-xl font-semibold transition"
          >
            {initialData ? "Update Blog" : "Publish Blog"}
          </button>
        </form>
      </div>
    </div>
  );
}

/* ================= META INPUT ================= */

function MetaInput({
  label,
  input,
  setInput,
  items,
  addItem,
  removeItem,
  color,
}) {
  const colorClasses =
    color === "red"
      ? "bg-red-600/20 text-red-400"
      : "bg-blue-600/20 text-blue-400";

  return (
    <div>
      <label className="block mb-3 text-gray-400">{label}</label>

      <div className="w-full bg-white/5 border border-white/10 
                      rounded-xl p-3 flex flex-wrap gap-2">

        {items.map((item) => (
          <div
            key={item}
            className={`flex items-center gap-2 px-3 py-1 
                        rounded-full text-sm ${colorClasses}`}
          >
            #{item}
            <button type="button" onClick={() => removeItem(item)}>
              <X size={14} />
            </button>
          </div>
        ))}

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addItem(input);
            }
          }}
          placeholder={`Type ${label} & press Enter`}
          className="flex-1 bg-transparent outline-none min-w-[120px]"
        />
      </div>
    </div>
  );
}



















// import React, { useEffect, useState, useRef } from "react";
// import { X, Upload } from "lucide-react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { useGlobalContext } from "@/context/GlobalContext";

// const BLOG_CATEGORIES = [
//   "Water Treatment Plants",
//   "RO Water Purifier",
//   "Reverse Osmosis Plant",
//   "Residential Elevator",
//   "Sewage Treatment Plant",
//   "Diesel Generator",
//   "Water Softening Plant",
//   "AC Service",
//   "Solar Power System",
//   "Refrigerators",
//   "UPS System",
//   "Geysers",
// ];

// export default function BlogForm({ open, onClose, initialData }) {
//   const fileInputRef = useRef();

//   const {
//     getImageUrl,
//     uploadBlog,
//     updateBlog,
//     getAllTags,
//     getAllKeywords,
//   } = useGlobalContext();

//   const getDefaultForm = () => ({
//     title: "",
//     excerpt: "",
//     content: "",
//     category: "",
//     status: "draft",
//     featured_media: null,
//     tags: [],
//     keywords: [],
//   });

//   const [form, setForm] = useState(getDefaultForm());
//   const [imagePreview, setImagePreview] = useState(null);
//   const [tagInput, setTagInput] = useState("");
//   const [keywordInput, setKeywordInput] = useState("");

//   /* ================= FETCH META ================= */
//   useEffect(() => {
//     const fetchMeta = async () => {
//       await getAllTags?.();
//       await getAllKeywords?.();
//     };
//     fetchMeta();
//   }, []);

//   /* ================= LOAD INITIAL DATA ================= */
// useEffect(() => {
//   if (!initialData) {
//     setForm(getDefaultForm());
//     setImagePreview(null);
//     return;
//   }

//   // ✅ Extract tag names
//   const parsedTags = Array.isArray(initialData.Tags)
//     ? initialData.Tags.map((tag) => tag.name?.toLowerCase()).filter(Boolean)
//     : [];

//   // ✅ Extract keyword values
//   const parsedKeywords = Array.isArray(initialData.Keywords)
//     ? initialData.Keywords.map((kw) =>
//         kw.keyword?.toLowerCase()
//       ).filter(Boolean)
//     : [];

//   setForm({
//     title: initialData.title || "",
//     excerpt: initialData.excerpt || "",
//     content: initialData.content || "",
//     category: initialData.category || "",
//     status: initialData.status?.toLowerCase() || "draft",
//     featured_media: null,
//     tags: parsedTags,
//     keywords: parsedKeywords,
//   });

//   if (initialData.featured_media) {
//     setImagePreview({
//       url: getImageUrl(initialData.featured_media),
//       type: initialData.media_type || "image",
//     });
//   } else {
//     setImagePreview(null);
//   }
// }, [initialData]);

//   if (!open) return null;

//   /* ================= SUBMIT ================= */
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();

//     Object.entries(form).forEach(([key, value]) => {
//       if (key === "tags" || key === "keywords") {
//         formData.append(key, JSON.stringify(value));
//       } else if (key === "featured_media") {
//         if (value instanceof File) {
//           formData.append("featured_media", value);
//         }
//       } else {
//         formData.append(key, value);
//       }
//     });

//     if (initialData) {
//       await updateBlog(formData, initialData.id);
//     } else {
//       await uploadBlog(formData);
//     }

//     onClose();
//   };

//   /* ================= TAG & KEYWORD ADD ================= */
//   const addTag = (value) => {
//     const trimmed = value.trim().toLowerCase();
//     if (!trimmed) return;

//     setForm((prev) =>
//       prev.tags.includes(trimmed)
//         ? prev
//         : { ...prev, tags: [...prev.tags, trimmed] }
//     );

//     setTagInput("");
//   };

//   const addKeyword = (value) => {
//     const trimmed = value.trim().toLowerCase();
//     if (!trimmed) return;

//     setForm((prev) =>
//       prev.keywords.includes(trimmed)
//         ? prev
//         : { ...prev, keywords: [...prev.keywords, trimmed] }
//     );

//     setKeywordInput("");
//   };

//   return (
//     <div className="fixed inset-0 z-50 text-white">
//       {/* Overlay */}
//       <div
//         className="absolute inset-0 bg-black/70 backdrop-blur-sm"
//         onClick={onClose}
//       />

//       {/* Drawer */}
//       <div className="absolute inset-y-0 right-0 w-full lg:w-[650px]
//                       bg-black border-l border-white/10
//                       shadow-2xl overflow-y-auto">

//         {/* Header */}
//         <div className="flex justify-between items-center px-8 py-6
//                         border-b border-white/10 sticky top-0 bg-black z-10">
//           <h2 className="text-2xl font-semibold">
//             {initialData ? "Edit Blog" : "Create Blog"}
//           </h2>
//           <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg">
//             <X size={20} />
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="p-8 space-y-8">

//           {/* Title */}
//           <div>
//             <label className="block mb-2 text-gray-400">Title *</label>
//             <input
//               value={form.title}
//               onChange={(e) =>
//                 setForm((prev) => ({ ...prev, title: e.target.value }))
//               }
//               className="w-full bg-white/5 border border-white/10
//                          rounded-xl p-4 focus:ring-2 focus:ring-red-600"
//               required
//             />
//           </div>

//           {/* Excerpt */}
//           <div>
//             <label className="block mb-2 text-gray-400">Description</label>
//             <textarea
//               value={form.excerpt}
//               onChange={(e) =>
//                 setForm((prev) => ({ ...prev, excerpt: e.target.value }))
//               }
//               rows={3}
//               className="w-full bg-white/5 border border-white/10
//                          rounded-xl p-4 focus:ring-2 focus:ring-red-600"
//             />
//           </div>

//           {/* Content */}
//           <div>
//             <label className="block mb-2 text-gray-400">Content *</label>
//             <div className="bg-white rounded-xl overflow-hidden">
//               <ReactQuill
//                 theme="snow"
//                 value={form.content}
//                 onChange={(value) =>
//                   setForm((prev) => ({ ...prev, content: value }))
//                 }
//               />
//             </div>
//           </div>

//           {/* Featured Media */}
//           <div>
//             <label className="block mb-3 text-gray-400">Featured Media</label>

//             {imagePreview ? (
//               imagePreview.type === "video" ? (
//                 <video
//                   src={imagePreview.url}
//                   controls
//                   className="w-full h-56 object-cover rounded-xl"
//                 />
//               ) : (
//                 <img
//                   src={imagePreview.url}
//                   alt="Preview"
//                   className="w-full h-56 object-cover rounded-xl"
//                 />
//               )
//             ) : (
//               <div className="h-56 flex items-center justify-center
//                               border-2 border-dashed border-white/20
//                               rounded-xl text-gray-500">
//                 No Media Selected
//               </div>
//             )}

//             <input
//               type="file"
//               hidden
//               ref={fileInputRef}
//               accept="image/*,video/*"
//               onChange={(e) => {
//                 const file = e.target.files?.[0];
//                 if (!file) return;

//                 setForm((prev) => ({ ...prev, featured_media: file }));

//                 setImagePreview({
//                   url: URL.createObjectURL(file),
//                   type: file.type.startsWith("video") ? "video" : "image",
//                 });
//               }}
//             />

//             <button
//               type="button"
//               onClick={() => fileInputRef.current?.click()}
//               className="mt-4 w-full flex items-center justify-center gap-2
//                          bg-gray-700 hover:bg-gray-600
//                          rounded-xl py-3 transition"
//             >
//               <Upload size={16} />
//               Upload Image / Video
//             </button>
//           </div>

//           {/* Category + Status */}
//           <div className="grid md:grid-cols-2 gap-6">
//             <select
//               value={form.category}
//               onChange={(e) =>
//                 setForm((prev) => ({ ...prev, category: e.target.value }))
//               }
//               className="bg-black border border-white/10
//                          rounded-xl p-3"
//               required
//             >
//               <option value="">Select Category</option>
//               {BLOG_CATEGORIES.map((cat) => (
//                 <option key={cat}>{cat}</option>
//               ))}
//             </select>

//             <select
//               value={form.status}
//               onChange={(e) =>
//                 setForm((prev) => ({ ...prev, status: e.target.value }))
//               }
//               className="bg-black border border-white/10
//                          rounded-xl p-3"
//             >
//               <option value="draft">Draft</option>
//               <option value="published">Published</option>
//             </select>
//           </div>

//           {/* Tags */}
//           <MetaInput
//             label="Tags"
//             input={tagInput}
//             setInput={setTagInput}
//             items={form.tags}
//             addItem={addTag}
//             removeItem={(tag) =>
//               setForm((prev) => ({
//                 ...prev,
//                 tags: prev.tags.filter((t) => t !== tag),
//               }))
//             }
//             color="red"
//           />

//           {/* Keywords */}
//           <MetaInput
//             label="Keywords"
//             input={keywordInput}
//             setInput={setKeywordInput}
//             items={form.keywords}
//             addItem={addKeyword}
//             removeItem={(kw) =>
//               setForm((prev) => ({
//                 ...prev,
//                 keywords: prev.keywords.filter((k) => k !== kw),
//               }))
//             }
//             color="blue"
//           />

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full bg-red-600 hover:bg-red-700
//                        py-3 rounded-xl font-semibold transition"
//           >
//             {initialData ? "Update Blog" : "Publish Blog"}
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// }

// /* ================= META INPUT ================= */

// function MetaInput({
//   label,
//   input,
//   setInput,
//   items,
//   addItem,
//   removeItem,
//   color,
// }) {
//   const colorClasses =
//     color === "red"
//       ? "bg-red-600/20 text-red-400"
//       : "bg-blue-600/20 text-blue-400";

//   return (
//     <div>
//       <label className="block mb-3 text-gray-400">{label}</label>

//       <div className="w-full bg-white/5 border border-white/10
//                       rounded-xl p-3 flex flex-wrap gap-2">

//         {items.map((item, index) => (
//           <div
//             key={`${item}-${index}`}
//             className={`flex items-center gap-2 px-3 py-1
//                         rounded-full text-sm ${colorClasses}`}
//           >
//             #{item}
//             <button type="button" onClick={() => removeItem(item)}>
//               <X size={14} />
//             </button>
//           </div>
//         ))}

//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               e.preventDefault();
//               addItem(input);
//             }
//           }}
//           placeholder={`Type ${label} & press Enter`}
//           className="flex-1 bg-transparent outline-none min-w-[120px]"
//         />
//       </div>
//     </div>
//   );
// }