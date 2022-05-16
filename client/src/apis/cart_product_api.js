import axios from "axios"

export const createCartProduct = async (data) => await axios.post('/cart_product/create',data).then(res => res.data)

export const getCartProductAll = async (data) => await axios.get('/cart_product/all' , {data : data}).then(res => res.data)

export const updateQuantity = async (data) => await axios.put(`/cart_product/updateQuantity/${data.id}` , {
    "quantity" : parseInt(data.quantity)
})

export const deleteCartProduct = async (id) => await axios.delete(`/cart_product/delete/${id}`) 