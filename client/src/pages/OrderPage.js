import React, { Component } from 'react'
import {  createOrder } from "../apis/order_api"
import { getCartProduct , removeAllCartProduct } from "../apis/cart_api"
import { Navigate } from "react-router-dom";
import OrderCard from '../components/OrderCard';

export default class OrderPage extends Component {

    state = {
        order_status : 'new',
        order_items : []
    }

    componentDidMount()
    {
        //getAllOrder()
        getCartProduct({user_id : localStorage.getItem('user_id')}).then(res => {
            this.setState({order_items : res.cart_products})
        })
    }

    orderConfirm = (e)=>{
       
        const data = {
            user_id : localStorage.getItem('user_id'),
            cart_items : this.state.order_items.map(val => val._id)
        }
        createOrder(data).then(res => {
            this.setState({order_items : [] , order_status : 'confirmed'})
            removeAllCartProduct()
        })

    }

  render() {
      console.log(this.state,"state")
      if(this.state.order_status == "confirmed")
      {
        return <Navigate to="/orders" replace={true} />
      }
    return (
        <div className='container'>
            <div className='row'>
                {

                  this.state.order_items.length > 0 ? this.state.order_items.map((val , index) => <div key={index} className='col-12' style={{"marginTop" : "15px" , "marginBottom" : "15px"}}><OrderCard cart_product_details = {val} /></div>)
                  : <div>
                  <h3>No Product Available in your Cart</h3>
                 </div>
                }
            </div>
           {this.state.order_items.length > 0 && <button onClick={this.orderConfirm} className="btn btn-primary" >Order Confirm</button> }
        </div>
    )
  }
}
