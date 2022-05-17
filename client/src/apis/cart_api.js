import axios from "axios"

export const createCart = async (data) => await axios.post('/cart/create' , data).then(res => res.data)

export const removeAllCartProduct = async() => await axios.put(`/cart/remove_all_cartproduct/${localStorage.getItem('cart_id')}`).then(res => res.data)

export const getCartProduct = async (data) => await axios.get(`/cart/get_all_cartproduct/${localStorage.getItem('user_id')}`).then(res => res.data)

