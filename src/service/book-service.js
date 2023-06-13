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
   
    let url;
    if ('keyword' in filter) {
        url = `${API_URL}?pageSize=${filter.pageSize}&pageIndex=${filter.pageIndex}&keyword=${filter.keyword}`;
    }
    else {
        url = `${API_URL}?pageSize=${filter.pageSize}&pageIndex=${filter.pageIndex}`;

    }

    return request.get(url, { filter }).then((res) => {
        return res;
    });
}

const getById = async (id) => {
    const url = `${API_URL}/byId?id=${id}`;
    return request.get(url).then((res) => {
        return res;
    });
};

const deleteBook = async (id) => {
    const url = `${API_URL}?id=${id}`;
    return request.delete(url).then((res) => {
        return res;
    });
};

const save = async (data) => {
    if (data.id) {
        const url = `${API_URL}`;
        return request.put(url, data).then((res) => {
            return res;
        });
    } else {
        const url = `${API_URL}`;
        return request.post(url, data).then((res) => {
            return res;
        });
    }
};




const bookService = {
    search,
    allBooks,
    getById,
    deleteBook,
    save
};

export default bookService;