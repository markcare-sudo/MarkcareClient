import React, { useMemo, useState } from "react";
import { Search, ArrowRight, Filter, Bookmark, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useGlobalContext } from "@/context/GlobalContext";
import SEO from "@/components/SEO";
import { BANNER_IMAGES } from "@/constants/branding";

/* ===============================
    Reusable Premium Blog Card
================================ */
const BlogCard = ({ blog, index }) => {
  const { getImageUrl } = useGlobalContext();
  const imageUrl = blog?.featured_media ? getImageUrl(blog.featured_media) : "/placeholder.jpg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        to={`/blogs/${blog?.slug || blog?.id}`}
        className="group flex flex-col h-full bg-neutral-900/50 backdrop-blur-md border border-white/5 rounded-[2rem] overflow-hidden hover:border-red-500/50 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
      >
        <div className="relative overflow-hidden aspect-[16/10]">
          <img
            src={imageUrl}
            alt={blog?.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4">
             <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-black/60 backdrop-blur-md text-white border border-white/10 rounded-full">
               {blog?.category || "Insight"}
             </span>
          </div>
        </div>

        <div className="p-8 flex flex-col flex-grow">
          <div className="flex items-center gap-3 text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] mb-4">
            <Bookmark size={12} className="text-red-600" />
            {new Date(blog?.created_at || blog?.createdAt).toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' })}
          </div>

          <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-red-500 transition-colors line-clamp-2">
            {blog?.title}
          </h3>

          <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3 mb-6">
            {blog?.excerpt || blog?.content?.replace(/<[^>]*>/g, '').slice(0, 120) + "..."}
          </p>

          <div className="mt-auto flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white group-hover:text-red-500 transition-colors">
            Continue Reading <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

/* ===============================
    Public Blogs Page
================================ */
export default function PublicBlogs() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tagFromUrl = queryParams.get("tag");
  const { blogs, getImageUrl } = useGlobalContext();

  const publishedBlogs = useMemo(() => {
    return Array.isArray(blogs) ? blogs.filter((b) => b?.status === "published") : [];
  }, [blogs]);

  const categories = useMemo(() => {
    const unique = new Set(publishedBlogs.map((b) => b?.category).filter(Boolean));
    return ["all", ...unique];
  }, [publishedBlogs]);

  const filteredBlogs = useMemo(() => {
    return publishedBlogs.filter((blog) => {
      const matchesCategory = category === "all" || blog?.category === category;
      const matchesSearch = !search || blog?.title?.toLowerCase().includes(search.toLowerCase());
      const matchesTag = !tagFromUrl || blog?.Tags?.some((t) => t.slug === tagFromUrl);
      return matchesCategory && matchesSearch && matchesTag;
    });
  }, [publishedBlogs, category, search, tagFromUrl]);

  const featuredBlog = filteredBlogs[0];
  const gridBlogs = filteredBlogs.slice(1);

  return (
    <>
      <SEO 
        title="Engineering Insights | MarkCare Journal" 
        description="Expert analysis on water treatment, solar energy, and facility management."
      />

      <div className="min-h-screen bg-[#050505] text-white">
        {/* Cinematic Hero Header */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <motion.img 
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            src={BANNER_IMAGES.BLOGS} 
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]" />
          
          <div className="relative z-10 text-center px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                    <Sparkles size={12} /> The MarkCare Journal
                </span>
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6">
                  Knowledge <span className="text-red-600 italic">Flowing.</span>
                </h1>
                <p className="max-w-xl mx-auto text-neutral-400 text-lg font-medium leading-relaxed">
                  Deep dives into sustainable engineering, water technology, and the future of facility management.
                </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 pb-32">
          
          {/* Controls Bar */}
          <div className="sticky top-24 z-30 mb-16 p-2 bg-neutral-900/80 backdrop-blur-xl border border-white/5 rounded-[2.5rem] flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full md:w-96 group">
              <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-red-500 transition-colors" />
              <input
                type="text"
                placeholder="Search the archive..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-14 pr-6 py-4 rounded-[2rem] bg-white/5 border-transparent focus:border-red-500/50 focus:bg-white/10 transition-all outline-none text-sm"
              />
            </div>

            <div className="flex flex-wrap gap-2 items-center px-4 overflow-x-auto no-scrollbar">
              <Filter size={14} className="text-neutral-500 mr-2 hidden lg:block" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                    category === cat ? "bg-white text-black border-white" : "bg-transparent text-neutral-400 border-white/10 hover:border-white/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {filteredBlogs.length > 0 ? (
              <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {/* Featured Highlight */}
                {featuredBlog && !search && (
                  <motion.div className="mb-24">
                    <Link to={`/blogs/${featuredBlog?.slug || featuredBlog?.id}`} className="group relative grid lg:grid-cols-2 gap-0 bg-neutral-900 border border-white/5 rounded-[3rem] overflow-hidden hover:border-red-500/30 transition-all duration-500">
                      <div className="relative overflow-hidden h-[400px] lg:h-full">
                        <img 
                          src={featuredBlog?.featured_media ? getImageUrl(featuredBlog.featured_media) : "/placeholder.jpg"} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                        />
                      </div>
                      <div className="p-10 lg:p-20 flex flex-col justify-center bg-gradient-to-br from-neutral-900 to-black">
                        <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.4em] mb-6">Editors Pick</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight group-hover:text-red-500 transition-colors leading-tight">
                          {featuredBlog?.title}
                        </h2>
                        <p className="text-neutral-400 text-lg leading-relaxed mb-8 line-clamp-3">
                          {featuredBlog?.excerpt || featuredBlog?.content?.replace(/<[^>]*>/g, '').slice(0, 180) + "..."}
                        </p>
                        <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest">
                          Read Case Study <ArrowRight size={18} />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )}

                {/* Main Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {gridBlogs.map((blog, idx) => (
                    <BlogCard key={blog.id} blog={blog} index={idx} />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-40">
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="text-2xl font-bold mb-2">No matches found</h3>
                <p className="text-neutral-500">Try adjusting your search or filters.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}