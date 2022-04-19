const baseURL = process.env.REACT_APP_BASE_URL;

const apiCall = async (endpoint, method, body) => {
  const init = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  const res = await fetch(baseURL + endpoint, init);
  return res;
};

export const loginPOST = (body) => {
  return apiCall(`auth/login`, "POST", body);
};

export const registerPOST = (body) => {
  console.log(body);
  return apiCall("auth/register", "POST", body);
};

export const postsGET = () => {
  return fetch(baseURL + "posts");
};

export const likesPost = async (id) => {
  console.log(id);
  return await fetch(baseURL + `posts/${id}/likes`, "POST");
};

export const dislikesPost = async (id) => {
  return await fetch(baseURL + `posts/${id}/dislike`, "POST");
};

export const likesGET = async (id) => {
  return await fetch(baseURL + `posts/${id}/likes`);
};
