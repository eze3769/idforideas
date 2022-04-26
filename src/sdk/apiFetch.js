const baseURL = process.env.REACT_APP_BASE_URL;

export const apiCall = async (endpoint, method, body, token = undefined) => {
  const init = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body:  body ? JSON.stringify(body) : undefined,
    authentication: token ? token : undefined
  };
  const res = await fetch(baseURL + endpoint, init);
  return res;
};

export const JSONResponse = (res) => {
  const data = res.json();
  return data;
}