
import axiosClient from './axiosClient';

const categoryApi = {
    getAll: (params) => {
        const url = "/products/categories";
        return axiosClient.get(url, { params });
    }
}

export default categoryApi;