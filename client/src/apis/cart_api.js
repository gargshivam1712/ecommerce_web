import axios from "axios"

export const createCart = async (data) => await axios.post('http://127.0.0.1:3001/cart/create' , data).then(res => res.data)

export const removeAllCartProduct = async() => await axios.put(`http://127.0.0.1:3001/cart/remove_all_cartproduct/${localStorage.getItem('cart_id')}`).then(res => res.data)

export const getCartProduct = async (data) => await axios.get('http://127.0.0.1:3001/cart/all' , {data : data}).then(res => res.data)

