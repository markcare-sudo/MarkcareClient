// context/GlobalContext.js
import { postErrorHandler } from '@/components/ErrorHandler';
import { successHandler } from '@/components/SuccessHandler';
// import { successHandler } from '@/components/SuccessHandler';
import { createBlog, deleteBlogById, getBlogs, getBlogsById, updateBlogById } from '@/services/blogsService';
import { createRequest } from '@/services/callbackRequestService';
import { getKeywords } from '@/services/keywordService';
import { getTags } from '@/services/tagsService';
import { createContext, useContext, useEffect, useState } from 'react';

const CLOUD_URL = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [blogs, setBlogs] = useState([])
  const [tags, setTags] = useState([])
  const [keywords, setKeywords] = useState([])
    const [blog, setBlog] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);


  const getImageUrl = (publicId) => {
  if (!publicId) return "/placeholder.jpg";

  return `${CLOUD_URL}${publicId}`;
};

  const fetchTags = async () => {
    try {
      const res = await getTags()
      setTags(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }

    const fetchKeywords = async () => {
    try {
      const res = await getKeywords()
      setKeywords(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchBlogs = async () => {
    try {
      const res = await getBlogs()
      setBlogs(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }

    const fetchBlog = async (id) => {
    try {
      const res = await getBlogsById(id)
      setBlog(res.data.data)
      return res
    } catch (error) {
      console.log(error)
    }
  }

  const uploadBlog = async (data) => {
    try {
      const res = await createBlog(data)
      successHandler(res)
      fetchBlogs()
    } catch (error) {
      postErrorHandler(error)
    }
  }
  

  const updateBlog = async (data, id) => {
    try {
      const res = await updateBlogById(data, id)
      successHandler(res)
      fetchBlogs()
    } catch (error) {
      postErrorHandler(error)
    }
  }

  const deleteBlog = async (id) => {
    try {
      const res = await deleteBlogById(id)
      successHandler(res)
      fetchBlogs()
    } catch (error) {
      postErrorHandler(error)
    }
  }


  useEffect(() => {
    fetchTags()
  }, [])

  useEffect(() => {
    fetchKeywords()
  }, [])

  useEffect(() => {
    fetchBlogs()
  }, [])


  
    const requestCallback = async (data) => {
    try {
      const res = await createRequest(data)
      console.log(res)
      successHandler(res)
    } catch (error) {
      postErrorHandler(error)
    }
  }


  return (
    <GlobalContext.Provider
      value={{
        getImageUrl,
        openDropdown,
        setOpenDropdown,
        mobileMenuOpen,
        toggleMobileMenu,
        loading,
        blogs,
        blog, setBlog,
        tags,
        keywords,
        requestCallback,
        fetchBlog,
        uploadBlog,
        updateBlog,
        deleteBlog,
        // logout,
        error
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
