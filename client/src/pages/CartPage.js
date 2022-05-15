import React, { Component } from 'react'
import CartCard from '../components/CartCard'
import { Navigate } from "react-router-dom"
import {getCartProduct  } from "../apis/cart_api"


export default class CartPage extends Component {

    state = {
        ordered : false,
        cart_products : []
    }

    componentDidMount(){
        getCartProduct({user_id : localStorage.getItem('user_id')}).then(res => {
            this.setState({cart_products : res.cart_products})
        })
    }

    onClick = (e)=>{
        console.log("ordsered")
        this.setState({ordered : true})
    }

  render() {
    if(this.state.ordered)
    {
        return <Navigate to="/order" replace={true} />
    }
    return (
      <div className='container'>
          <div className='row'>
              {
                 this.state.cart_products.length > 0 ? this.state.cart_products.map((val , index) => <div key={index} className='col-12' style={{"marginTop" : "15px" , "marginBottom" : "15px"}}><CartCard cart_product_details = {val} /></div>)
                 : <div>
                     <h3>No Product Available in your Cart</h3>
                    </div>
              }
          </div>
         {this.state.cart_products.length > 0 && <button onClick={this.onClick} className="btn btn-primary" >Order</button>}
      </div>
    )
  }
}
