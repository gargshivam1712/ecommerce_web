import axios from "axios"

export const createCategory = async (data) => await axios.post('/category/create' , data).then(res => res.data)

export const getAllCategory = async () => await axios.get('/category/all').then(res => res.data)
