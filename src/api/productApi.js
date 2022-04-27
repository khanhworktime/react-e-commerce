
import axiosClient from './axiosClient';

const productApi = {
    getAll: (params) => {
        const url = '/products';
        return axiosClient.get(url, { params });
    },
    getId: (id) => {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },
    getCategory: (category) => {
        const url = `/products/category/${category}`;
        return axiosClient.get(url);
    }
}

export default productApi;