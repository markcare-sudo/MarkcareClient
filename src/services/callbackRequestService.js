import apiClient from "../utils/api";

// Function to fetch a single user by ID
export const createRequest = async (data) => {
    return await apiClient.post(`/callback-requests`, data);
};


export const getRequests = async (params = {}) => {
  return await apiClient.get("/callback-requests", { params });
};


export const getRequestsById = async (id) => {
    return await apiClient.get(`/callback-requests/${id}`,);
};



