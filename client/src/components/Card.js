import React, { Component } from 'react'
import download from "../images/download.jpg"
import { createCartProduct } from "../apis/cart_product_api"
import { Navigate } from "react-router-dom"

export default class Card extends Component {

    constructor(props){
        super(props)
    }

    state = {
        add_to_cart : false
    }

    onAddCart = (e) => {
        const id = e.target.id
        const data = {
            cart_id : localStorage.getItem('cart_id') , 
            product_id : id , 
            quantity : 1
        }

        createCartProduct(data).then(res => {
            this.setState({add_to_cart : true})
        })
    }

  render() {
      if(this.state.add_to_cart)
      {
        return <Navigate to="/cart" replace={true} />
      }
      const product_details = this.props.product_details
    return (
        <div className='card' style={{"marginTop" : "15px" , "marginBottom": "15px"}} >
            <div className='border' style={{"height" : "150px"}} >
                <img style={{"height" : "inherit"}} src= {product_details.product_image_url} className='card-img-top' />
            </div>
            <div className ="card-body">
            <h5 className="card-title">{product_details.product_title}</h5>
            <p className="card-text">{product_details.product_description}</p>
            <div>
                <p>Rs {product_details.price.$numberDecimal}</p>
                <button id = {product_details._id} onClick={this.onAddCart} className="btn btn-primary">Add To Cart</button>
            </div>
            
         </div>
        </div>
    )
  }
}
