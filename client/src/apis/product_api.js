import axios from "axios"

export const createProduct = async (data) => await axios.post('http://127.0.0.1:3001/product/create',data).then(res => res.data)

export const getAllProduct = async () => await axios.get('http://127.0.0.1:3001/product/all').then(res => res.data)
