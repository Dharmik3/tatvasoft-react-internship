import request from "./request";

const API_URL = "api/user";

// const request = axios.create({
//     baseURL: "https://book-e-sell-node-api.vercel.app/",
//     timeout: 12400000,
//     responseType: "json",
// });

const login = async (data) => {
    const url = `${API_URL}/login`;
    return request.post(url, data).then((res) => {
        return res;
    });
};

const create = async (data) => {
    const url = `${API_URL}`;
    return request.post(url, data).then((res) => {
        return res;
    });
};

const authService = {
    login,
    create,
};

export default authService;