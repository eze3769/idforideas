const baseURL = process.env.REACT_APP_BASE_URL;


const apiCall = async (endpoint, method, body) => {
    const init = {
        method: method,
    }
    const res = await fetch(baseURL+endpoint, init , body)
    return res
}
export const registerPOST = (body) => {
    return apiCall(`auth/login`, 'POST', body)
}
export const loginPOST = (body) => {
    return apiCall('auth/register', 'POST', body)
}
export const postsGET = () => {
    return apiCall('posts', 'GET', null)
}
