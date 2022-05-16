import axios from "axios"

export const createProduct = async (data) => await axios.post('/product/create',data).then(res => res.data)

export const getAllProduct = async () => await axios.get('/product/all').then(res => res.data)
