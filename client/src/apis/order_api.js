import axios from "axios"

export const createOrder = async (data)=> await axios.post('http://127.0.0.1:3001/order/create' , data).then(res => res.data)

export const getAllOrderByUserId = async (id) => await axios.get(`http://127.0.0.1:3001/order/getOrderByUserId/${id}`).then(res => res.data)

export const updateOrderStatus = async (id , status) => await axios.put(`http://127.0.0.1:3001/order/updateStatus/${id}` , {status : status}).then(res => res.data)

export const getOrderById = async (id) => await axios.get(`http://127.0.0.1:3001/order/getOrderById/${id}`).then(res => res.data)