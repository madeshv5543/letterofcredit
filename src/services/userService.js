import axios from 'axios';
import config from './config.js';
import utils from './utils';
const API_URL = config.API_URL;
const EndPoints = config.END_POINTS;

export const getUser = function() {
    const header = { "headers":utils.authHeader()}
    return axios.get(`${API_URL}${EndPoints.GET_USER}`, header).then(res => res.data)
}

export const updateUser  = (user) => {
    const header = { "headers": utils.authHeader() }
    return axios.post(`${API_URL}${EndPoints.EDIT_USER}`, user, header).then(res => res.data)
}

export const getSellerList =  () => {
    const header = { "headers" : utils.authHeader()}
    return axios.get(`${API_URL}${EndPoints.SELLER_LIST}`, header).then(res => res.data)
}

export const placeOrder = (data) => {
    const header = { "headers" :  utils.authHeader()}
    return axios.post(`${API_URL}${EndPoints.PLACE_ORDER}`, data, header).then(res => res.data)
}

export const getOrders = () => {
    const header = { "headers" : utils.authHeader()}
    return axios.get(`${API_URL}${EndPoints.ORDER_LIST}`, header).then(res => res.data)
}

export const getOrderDetails = (orderId) => {
    const header = { "headers" :  utils.authHeader()}
    return axios.get(`${API_URL}${EndPoints.GET_ORDER}${orderId}`, header).then(res => res.data )
}

export const updateOrder = (data, orderId) => {
    const header = { "headers" : utils.authHeader()};
    return axios.post(`${API_URL}${EndPoints.EDIT_ORDER}${orderId}`, data, header).then(res => res.data)
}
 
export const deleteOrder = (orderId) => {
    const header = { "headers" : utils.authHeader()};
    return axios.post(`${API_URL}${EndPoints.DELETE_ORDER}${orderId}`, {}, header).then(res => res.data)
}

export const sentToseller = (orderId) => {
    const header = { "headers" : utils.authHeader()};
    return axios.post(`${API_URL}${EndPoints.SENT_TO_SELLER}${orderId}`, {}, header).then(res => res.data)
}

export const SellerConfirm = (orderId) => {
    const header = { "headers" : utils.authHeader()};
    return axios.post(`${API_URL}${EndPoints.SELLER_CONFIRM}${orderId}`, {}, header).then(res => res.data)
}

export const getDataFromBlochain = (data) => {
    const header = { "headers" : utils.authHeader()};
    return axios.post(`${API_URL}${EndPoints.DATA_BLOCKCHAIN}`, data, header).then(res => res.data)
}

export default {
    getUser,
    updateUser,
    getSellerList,
    placeOrder,
    getOrders,
    getOrderDetails,
    updateOrder,
    deleteOrder,
    sentToseller,
    SellerConfirm,
    getDataFromBlochain
}