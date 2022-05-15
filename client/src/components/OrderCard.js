import React, { Component } from 'react'
import download from "../images/download.jpg"

export default class OrderCard extends Component {

    constructor(props)
    {
        super(props)
    }

  render() {

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
                    <p>Quantity. {cart_product_details.quantity}</p>
                </div>
                <div className='col-lg-4'>
                    <h3>Total amount</h3>
                    <p>Rs. {cart_product_details.quantity * cart_product_details.product_id.price.$numberDecimal}</p>
                </div>
            </div>
      </div>
    )
  }
}
