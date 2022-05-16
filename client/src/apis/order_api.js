import axios from "axios"

export const createOrder = async (data)=> await axios.post('/order/create' , data).then(res => res.data)

export const getAllOrderByUserId = async (id) => await axios.get(`/order/getOrderByUserId/${id}`).then(res => res.data)

export const updateOrderStatus = async (id , status) => await axios.put(`/order/updateStatus/${id}` , {status : status}).then(res => res.data)

export const getOrderById = async (id) => await axios.get(`/order/getOrderById/${id}`).then(res => res.data)