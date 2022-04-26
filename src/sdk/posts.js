import { apiCall } from "./apiFetch";

export const listPosts = async () => {
  return await apiCall("/posts", "GET", undefined);
};

export const createPosts = async (body, token) => {
    return await apiCall("/posts", "POST", body, token);
  };

export const updatePosts = async (id, body, token) => {
  return await apiCall(`/posts/${id}`, "PUT", body, token);
};

export const deletePosts = async (id) => {
  return await apiCall(`/posts/${id}`, "POST", undefined);
};
  