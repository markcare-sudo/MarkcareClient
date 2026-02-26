import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Tag, Clock, Share2 } from "lucide-react";
import { useGlobalContext } from "@/context/GlobalContext";

const DUMMY_IMAGE = "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1600&auto=format&fit=crop";

export default function BlogDetails() {
  const { slug } = useParams();
  const { fetchBlog, getImageUrl } = useGlobalContext();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white">
      <h2 className="text-2xl font-bold mb-4">Blog not found</h2>
      <Link to="/blogs" className="text-blue-400 flex items-center gap-2 hover:underline">
        <ArrowLeft size={18} /> Back to all blogs
      </Link>
    </div>
  );

  const image = getImageUrl?.(blog?.featured_media) || DUMMY_IMAGE;
  const formattedDate = blog?.published_at
    ? new Date(blog.published_at).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })
    : "Draft";

    const handleShare = async () => {
    const shareData = {
      title: blog?.title,
      text: blog?.excerpt || "Check out this amazing blog!",
      url: window.location.href, // This gets the current page URL
    };

    try {
      if (navigator.share) {
        // This opens the native share menu on Mobile/Mac
        await navigator.share(shareData);
      } else {
        // Fallback: Copy to clipboard if native share isn't supported (like on Chrome Desktop)
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 selection:bg-blue-500/30">
      {/* 1. HERO SECTION */}
      <div className="relative w-full h-[60vh] md:h-[70vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <img src={image} alt={blog.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
        </div>

        <div className="container mx-auto px-6 pb-12 relative z-10 max-w-5xl">
          <Link to="/blogs" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 group transition-all">
            <ArrowLeft size={16} className="group-transform group-hover:-translate-x-1" /> Back to Library
          </Link>
          
          {blog.category && (
            <span className="px-3 py-1 text-xs font-semibold tracking-widest uppercase bg-blue-600 text-white rounded-sm mb-4 inline-block">
              {blog.category}
            </span>
          )}
          
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] text-white mb-6">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-blue-500" />
              {formattedDate}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-blue-500" />
              6 min read
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <main className="container mx-auto px-6 pb-20 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* CONTENT COL */}
          <div className="lg:col-span-8">
            {/* Excerpt */}
            {blog.excerpt && (
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-12 italic border-l-2 border-blue-500 pl-6">
                {blog.excerpt}
              </p>
            )}

            {/* Rendered HTML Content */}
            <div
              className="prose prose-invert prose-lg max-w-none 
                prose-p:text-gray-300 prose-p:leading-[1.8] 
                prose-headings:font-bold prose-headings:text-white
                prose-strong:text-white prose-a:text-blue-400 
                prose-img:rounded-xl prose-blockquote:border-blue-500"
              dangerouslySetInnerHTML={{ __html: blog.content || "" }}
            />

            {/* TAGS SECTION */}
            {(blog.Tags?.length > 0) && (
              <div className="mt-16 pt-8 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {blog.Tags.map((tag) => (
                    <Link
                      key={tag.id}
                      to={`/blogs?tag=${tag.slug}`}
                      className="text-xs uppercase tracking-wider px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md transition"
                    >
                      #{tag.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* SIDEBAR (Right) */}
          <aside className="lg:col-span-4 space-y-10">
            {/* Meta Card */}
            <div className="bg-[#111] border border-white/5 p-6 rounded-2xl sticky top-24">
              {/* <h3 className="text-lg font-semibold mb-4">Keywords</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {blog.Keywords?.map((key) => (
                  <span key={key.id} className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
                    {key.keyword}
                  </span>
                ))}
              </div> */}
           <button 
  onClick={handleShare}
  className="w-full py-3 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition active:scale-95"
>
  <Share2 size={18} /> 
  Share Article
</button>
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}

/* SKELETON LOADER COMPONENT */
function BlogSkeleton() {
  return (
    <div className="min-h-screen bg-[#050505] animate-pulse">
      <div className="w-full h-[60vh] bg-white/5" />
      <div className="container mx-auto px-6 max-w-5xl mt-12 space-y-6">
        <div className="h-4 w-32 bg-white/10 rounded" />
        <div className="h-12 w-3/4 bg-white/10 rounded" />
        <div className="h-6 w-1/2 bg-white/10 rounded" />
        <div className="grid grid-cols-12 gap-8 pt-12">
          <div className="col-span-8 space-y-4">
            <div className="h-4 w-full bg-white/5 rounded" />
            <div className="h-4 w-full bg-white/5 rounded" />
            <div className="h-4 w-2/3 bg-white/5 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}