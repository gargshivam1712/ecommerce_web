import axios from "axios"

export const createCartProduct = async (data) => await axios.post('http://127.0.0.1:3001/cart_product/create',data).then(res => res.data)

export const getCartProductAll = async (data) => await axios.get('http//127.0.0.1:3001/cart_product/all' , {data : data}).then(res => res.data)

export const updateQuantity = async (data) => await axios.put(`http://127.0.0.1:3001/cart_product/updateQuantity/${data.id}` , {
    "quantity" : parseInt(data.quantity)
})

export const deleteCartProduct = async (id) => await axios.delete(`http://127.0.0.1:3001/cart_product/delete/${id}`) 