import apiClient from "../utils/api";


export const getTags = async (params = {}) => {
  return await apiClient.get("/tags", { params });
};


export const getTagById = async (id) => {
    return await apiClient.get(`/tags/${id}`,);
};


export const deleteTagById = async (id, ) => {
    return await apiClient.delete(`/tags/${id}`);
};

