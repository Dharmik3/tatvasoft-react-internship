import request from "./request";


const API_URL = "api/book";

// const request = axios.create({
//     baseURL: "https://book-e-sell-node-api.vercel.app/",
//     timeout: 12400000,
//     responseType: "json",
// });

const search = async (query) => {
    const url = `${API_URL}/search?keyword=${query}`;
    return request.get(url).then((res) => {
        return res;
    });
};

const allBooks = async () => {
    const url = `${API_URL}/all`;
    return request.get(url).then((res) => {
        return res;
    });
}



const bookService = {
    search,
    allBooks
};

export default bookService;