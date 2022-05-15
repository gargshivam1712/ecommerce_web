import axios from "axios"

export const registerUser = async (data)=>await axios.post('http://127.0.0.1:3001/user/create' , data).then(res => res.data)

export const loginUser = async (data)=>await axios.post('http://127.0.0.1:3001/user/login' , data).then(res => res.data)