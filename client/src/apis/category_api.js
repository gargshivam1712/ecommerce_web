import axios from "axios"

export const createCategory = async (data) => await axios.post('http://127.0.0.1:3001:/category/create' , data).then(res => res.data)

export const getAllCategory = async () => await axios.get('http://127.0.0.1:3001/category/all').then(res => res.data)
