// import request from "./request";
import axios from "axios";
const ENDPOINT = "api/user";

const request = axios.create({
    //  baseURL: "https://web1.anasource.com/BookStore/api/BookStore/", // url = base url + request url
    //   baseURL: "http://localhost:5000/",
    baseURL: "https://book-e-sell-node-api.vercel.app/",
    // baseURL: "https://helperland1.azurewebsites.net/",
    // baseURL: "https://helperland1.azurewebsites.net/",
    //  baseURL: "http://192.168.1.20/",
    timeout: 12400000,
    responseType: "json",
});

const login = async (data) => {
    const url = `${ENDPOINT}/login`;
    return request.post(url, data).then((res) => {
        return res;
    });
};

const create = async (data) => {
    const url = `${ENDPOINT}`;
    return request.post(url, data).then((res) => {
        return res;
    });
};

const authService = {
    login,
    create,
};

export default authService;