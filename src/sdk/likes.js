import { apiCall } from "./apiFetch";

export const likesPost = async (id, token) => {
  return await apiCall(`/posts/${id}/like`, "POST", undefined, token);
};

export const likesGET = async (id) => {
  return await apiCall(`/posts/${id}/like`, "GET", undefined);
};

export const allLikesGET = async (id) => {
  return await apiCall(`/posts/${id}/likes`, undefined);
};

export const dislikesPost = async (id, token) => {
  return await apiCall(`/posts/${id}/dislike`, "POST", undefined, token);
};
