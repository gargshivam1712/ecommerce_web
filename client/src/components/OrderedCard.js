import React, { Component , Fragment } from 'react'
import { updateOrderStatus , cancelOrderById } from "../apis/order_api"

export default class  extends Component {

    constructor(props)
    {
        super(props)
    }

    state = {
        status : this.props.order.status
    }

    componentDidMount()
    {
        this.setState({status : this.props.order.status})
    }

    cancelOrder = (e) =>{
        cancelOrderById(this.props.order._id).then(res =>{
            console.log("rse" , res)
             this.setState({status : "Cancel"})})
    }

  render() {
      let order = this.props.order
      let total = 0
      order.cart_items.forEach(val => {
          total = total + val.quantity * val.product_id.price.$numberDecimal
      }); 
      console.log(order , total)
    return (
      <Fragment>
          <div>
              <p><b>Order Id</b> {order._id}</p>
              <p><b>Status : </b>{this.state.status}</p>
              <p><b>Created At : </b>{order.created_at}</p>
              <p><b>Total amount : Rs. </b>{total}</p>
          </div>
          { (this.state.status === "Created" || this.state.status === "Cofirmed") && <button onClick={this.cancelOrder} className='btn btn-primary'>Cancel</button>}
          </Fragment>
    )
  }
}
