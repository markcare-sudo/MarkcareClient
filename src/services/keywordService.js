import apiClient from "../utils/api";


export const getKeywords = async (params = {}) => {
  return await apiClient.get("/keywords", { params });
};


export const getKeywordById = async (id) => {
    return await apiClient.get(`/keywords/${id}`,);
};


export const deleteKeywordById = async (id, ) => {
    return await apiClient.delete(`/keywords/${id}`);
};

