import { apiCall } from "./apiFetch";

export const login = (body) => {
  console.log(body);
  return apiCall(`login`, "POST", body, false);
};

export const register = (body) => {
  console.log(body);
  return apiCall("register", "POST", body, false);
};
