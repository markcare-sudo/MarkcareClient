import apiClient from "../utils/api";

// Function to fetch a single user by ID
export const createBlog = async (data) => {
    console.log(data)
    return await apiClient.post(`/blogs`, data);
};

export const getBlogs = async () => {
    return await apiClient.get(`/blogs`,);
};


export const getBlogsById = async (id) => {
    return await apiClient.get(`/blogs/${id}`,);
};


export const updateBlogById = async (data, id) => {
    return await apiClient.put(`/blogs/${id}`, data);
};


export const deleteBlogById = async (id, ) => {
    return await apiClient.delete(`/blogs/${id}`);
};

