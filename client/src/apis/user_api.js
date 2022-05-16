import axios from "axios"

export const registerUser = async (data)=>await axios.post('/user/create' , data).then(res => res.data)

export const loginUser = async (data)=>await axios.post('/user/login' , data).then(res => res.data)