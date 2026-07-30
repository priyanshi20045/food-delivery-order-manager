import axios from "axios";

const API_URL = "http://localhost:8081/api/orders";

export const addOrder = (order) => {
    return axios.post(API_URL, order);
};

export const getAllOrders = () => {
    return axios.get(API_URL);
};

export const filterOrders = (isPaid, maxDistance) => {
    return axios.get(`${API_URL}/filter`, {
        params: {
            isPaid,
            maxDistance
        }
    });
};

export const assignDelivery = (maxDistance) => {
    return axios.post(`${API_URL}/assign`, null, {
        params: {
            maxDistance
        }
    });
};