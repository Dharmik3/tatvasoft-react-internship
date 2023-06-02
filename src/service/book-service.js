import request from "./request";


const API_URL = "api/book";



const search = async (query) => {
    const url = `${API_URL}/search?keyword=${query}`;
    return request.get(url).then((res) => {
        return res;
    });
};

const allBooks = async (filter) => {
    // book ? pageSize = 1 & pageIndex=0 & keyword=dog
    console.log('keyword' in filter)
    let url;
    if ('keyword' in filter) {
        url = `${API_URL}?pageSize=${filter.pageSize}&pageIndex=${filter.pageIndex}&keyword=${filter.keyword}`;
    }
    else {
            url = `${API_URL}?pageSize=${filter.pageSize}&pageIndex=${filter.pageIndex}`;
        
    }

    return request.get(url,{filter}).then((res) => {
        return res;
    });
}



const bookService = {
    search,
    allBooks
};

export default bookService;