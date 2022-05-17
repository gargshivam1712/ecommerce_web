import React, { Component } from 'react'
import { getAllOrderByUserId , cancelOrderById } from "../apis/order_api"
import OrderedCard from '../components/OrderedCard'

export default class OrdersPage extends Component {

    state = {
        orders : []
    }

    componentDidMount()
    {
        getAllOrderByUserId(localStorage.getItem('user_id')).then(res => this.setState({orders : res}))
    }

  render() {
    return (
      <div className='container'>
        <div className='row'>
            {
                this.state.orders.length > 0 ? this.state.orders.map((val , index) => <div style={{ backgroundColor : "#80808059"}} className='border col-sm-4 m-3' key = {index}><OrderedCard cancelOrderById = {(e) => this.cancelOrderById(e , val._id)} order = {val} /></div>)
                : <div><h3>No Order is Available</h3></div>
            }
        </div>
      </div>

    )
  }
}
