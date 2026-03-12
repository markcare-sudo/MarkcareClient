import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useGlobalContext } from "@/context/GlobalContext";

const DUMMY_IMAGE = "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1600&auto=format&fit=crop";

export default function BlogDetails() {
  const { slug } = useParams();
  const { fetchBlog, getImageUrl } = useGlobalContext();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  // Reading Progress Bar logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    let isMounted = true;
    const loadBlog = async () => {
      try {
        setLoading(true);
        const response = await fetchBlog(slug);
        const blogData = response?.data?.data || response?.data || response;
        if (isMounted) setBlog(blogData);
      } catch (err) {
        console.error("Error fetching blog:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    if (slug) loadBlog();
    return () => { isMounted = false; };
  }, [slug]);

  if (loading) return <BlogSkeleton />;

  if (!blog) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white p-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
        <h2 className="text-3xl font-bold mb-4">Article Disappeared</h2>
        <p className="text-gray-400 mb-8">We couldn't find the story you're looking for.</p>
        <Link to="/blogs" className="px-6 py-3 bg-red-600 rounded-full font-bold flex items-center gap-2 hover:bg-red-700 transition mx-auto w-fit">
          <ArrowLeft size={18} /> Explore Library
        </Link>
      </motion.div>
    </div>
  );

  const image = getImageUrl?.(blog?.featured_media) || DUMMY_IMAGE;
  const formattedDate = blog?.published_at
    ? new Date(blog.published_at).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })
    : "Draft Edition";

  const handleShare = async () => {
    const shareData = {
      title: blog?.title,
      text: blog?.excerpt || "Insightful read from MarkCare!",
      url: window.location.href,
    };
    try {
      if (navigator.share) await navigator.share(shareData);
      else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } catch (err) { console.error("Error sharing:", err); }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 selection:bg-red-500/30">
      {/* 🛠 READING PROGRESS BAR */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-red-600 origin-left z-[60]" style={{ scaleX }} />

      {/* 1. HERO SECTION (Editorial Style) */}
      <header className="relative w-full h-[75vh] flex items-end overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 z-0"
        >
          <img src={image} alt={blog.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-transparent to-transparent" />
        </motion.div>

        <div className="container mx-auto px-6 pb-16 relative z-10 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/blogs" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-red-500 hover:text-white mb-8 group transition-all">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Journal
            </Link>
            
            <div className="flex items-center gap-3 mb-6">
              {blog.category && (
                <span className="px-4 py-1.5 text-[10px] font-black tracking-widest uppercase bg-white text-black rounded-full">
                  {blog.category}
                </span>
              )}
              <span className="h-px w-8 bg-white/20" />
              <div className="flex items-center gap-2 text-gray-400 text-[10px] uppercase font-bold tracking-widest">
                <Clock size={12} className="text-red-500" /> 6 MIN READ
              </div>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold leading-[0.95] text-white mb-8 tracking-tighter">
              {blog.title}
            </h1>

            <div className="flex items-center gap-4 text-gray-400 text-sm border-t border-white/10 pt-8 w-fit">
               <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold text-white">M</div>
               <div className="flex flex-col">
                  <span className="text-white font-bold">MarkCare Editorial</span>
                  <span className="text-xs opacity-60">{formattedDate}</span>
               </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* 2. MAIN CONTENT AREA */}
      <main className="container mx-auto px-6 py-20 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* CONTENT COL */}
          <div className="lg:col-span-8">
            {/* Excerpt with Modern Treatment */}
            {blog.excerpt && (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative mb-16"
              >
                <div className="absolute -left-6 top-0 bottom-0 w-1 bg-red-600" />
                <p className="text-2xl md:text-3xl text-white font-medium leading-tight tracking-tight">
                  {blog.excerpt}
                </p>
              </motion.div>
            )}

            {/* Content with Custom Prose */}
            <article
              className="prose prose-invert prose-xl max-w-none 
                prose-p:text-neutral-400 prose-p:leading-[1.9] prose-p:mb-8
                prose-headings:font-bold prose-headings:text-white prose-headings:tracking-tight
                prose-strong:text-white prose-strong:font-bold
                prose-a:text-red-500 prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-3xl prose-img:shadow-2xl prose-img:border prose-img:border-white/10
                prose-blockquote:border-red-600 prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:rounded-r-xl prose-blockquote:text-white prose-blockquote:italic"
              dangerouslySetInnerHTML={{ __html: blog.content || "" }}
            />

            {/* TAGS FOOTER */}
            {(blog.Tags?.length > 0) && (
              <div className="mt-20 pt-10 border-t border-white/5">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 mb-6">Related Topics</h4>
                <div className="flex flex-wrap gap-3">
                  {blog.Tags.map((tag) => (
                    <Link
                      key={tag.id}
                      to={`/blogs?tag=${tag.slug}`}
                      className="text-[11px] font-bold uppercase tracking-widest px-5 py-2.5 bg-neutral-900 border border-white/5 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300"
                    >
                      {tag.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* Engagement Card */}
              <div className="bg-neutral-900/50 backdrop-blur-md border border-white/5 p-8 rounded-[2rem]">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Bookmark size={20} className="text-red-600" /> 
                  Story Tools
                </h3>
                
                <div className="space-y-4">
                  <button 
                    onClick={handleShare}
                    className="w-full py-4 bg-red-600 text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-red-700 transition active:scale-[0.98] shadow-lg shadow-red-600/20"
                  >
                    <Share2 size={18} /> Share Story
                  </button>

                  <div className="pt-6 mt-6 border-t border-white/5">
                    <div className="flex items-center gap-3 text-sm text-neutral-400 mb-4">
                      <CheckCircle2 size={16} className="text-red-500" />
                      <span>Verified Industry Insights</span>
                    </div>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      All MarkCare articles are reviewed by our engineering team for technical accuracy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Newsletter Callout */}
              <div className="p-8 bg-gradient-to-br from-red-600 to-red-800 rounded-[2rem] text-white overflow-hidden relative group">
                  <div className="relative z-10">
                    <h4 className="text-2xl font-bold mb-2 leading-none">Stay Updated</h4>
                    <p className="text-white/80 text-sm mb-6">Get technical insights delivered monthly.</p>
                    <input type="email" placeholder="email@address.com" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm mb-3 placeholder:text-white/40 focus:outline-none focus:bg-white/20 transition" />
                    <button className="w-full py-3 bg-white text-black font-black text-xs uppercase rounded-xl hover:bg-neutral-100 transition">Subscribe</button>
                  </div>
                  <div className="absolute -bottom-4 -right-4 text-white/10 rotate-12 transition-transform group-hover:scale-110">
                    <Bookmark size={120} />
                  </div>
              </div>
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}

/* 💀 PREMIUM SKELETON LOADER */
function BlogSkeleton() {
  return (
    <div className="min-h-screen bg-[#050505] overflow-hidden">
      <div className="w-full h-[75vh] bg-neutral-900 animate-pulse relative">
        <div className="absolute bottom-16 left-0 right-0 container mx-auto px-6 max-w-6xl space-y-6">
          <div className="h-4 w-24 bg-white/10 rounded-full" />
          <div className="h-16 w-3/4 bg-white/10 rounded-2xl" />
          <div className="h-8 w-1/4 bg-white/10 rounded-full" />
        </div>
      </div>
      <div className="container mx-auto px-6 max-w-6xl py-20 grid grid-cols-12 gap-16">
        <div className="col-span-8 space-y-8">
           <div className="h-6 w-full bg-neutral-900 rounded-full animate-pulse" />
           <div className="h-6 w-full bg-neutral-900 rounded-full animate-pulse" />
           <div className="h-6 w-2/3 bg-neutral-900 rounded-full animate-pulse" />
           <div className="h-[400px] w-full bg-neutral-900 rounded-[2rem] animate-pulse mt-12" />
        </div>
      </div>
    </div>
  );
}