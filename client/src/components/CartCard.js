import React, { Component } from 'react'
import download from "../images/download.jpg"
import { updateQuantity  , deleteCartProduct} from "../apis/cart_product_api"
import { Navigate } from "react-router-dom"

export default class CartCard extends Component {

    constructor(props)
    {
        super(props)
    }

  state = {
    quantity : 1,
    status : 'available'
  }

  componentDidMount()
  {
    this.setState({
      quantity : this.props.cart_product_details.quantity
    })
  }

  onChange = (e)=>{
    this.setState({[e.target.name] : e.target.value})
    console.log({id : this.props.cart_product_details._id , quantity : e.target.value})
    updateQuantity({id : this.props.cart_product_details._id , quantity : e.target.value})
  }

  cancelCartProduct = (e)=>{
    deleteCartProduct(this.props.cart_product_details._id)
    this.setState({status : 'deleted'})
  }

  render() {

    if(this.state.status == 'deleted')
    {
      return <Navigate to="/cart" replace={true} />
    }

    const cart_product_details = this.props.cart_product_details
    console.log("cart details prodcut" , cart_product_details)
    return (
      <div className='container'>
            <div className='row'>
                <div className='col-lg-4' style={{"height" : "150px"}}>
                    <img style={{"height" : "inherit"}} src= {cart_product_details.product_id.product_image_url} />
                </div>
                <div className='col-lg-4'>
                    <h3>{cart_product_details.product_id.product_title}</h3>
                    <p>{cart_product_details.product_id.product_description}</p>
                    <p>Rs. {cart_product_details.product_id.price.$numberDecimal}</p>
                    <select id = 'quantity' onChange={this.onChange} name = 'quantity' value={this.state.quantity}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </select>
                </div>
                <div className='col-lg-4'>
                  <button className="btn btn-primary" onClick={this.cancelCartProduct} >Cancel</button>
                </div>
            </div>
      </div>
    )
  }
}
