import React, { Component, Fragment } from 'react'
import { Route , Routes , Navigate } from "react-router-dom"
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import CartPage from './pages/CartPage'
import OrderPage from './pages/OrderPage'
import OrdersPage from './pages/OrdersPage'

export default class App extends Component {

  state = {
    authenticated : !!localStorage.getItem('authenticated'),
  }

    isAuthenticated =()=>{
        return this.state.authenticated
    }

    logout = ()=>{
        localStorage.removeItem('authenticated')
        this.setState({authenticated : false})
    }

    login = ()=>{
      this.setState({authenticated : true})
      localStorage.setItem('authenticated' , true)
    }

  render() {
    return (
      <Fragment>
        <Navbar  authenticated = {this.state.authenticated} logout = {this.logout}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={ this.isAuthenticated() ? <Navigate to="/" replace={true} /> : <Login login = {this.login} />} />
          <Route path="register" element={<Register login = {this.login} />} />
          <Route path="cart" element={ this.isAuthenticated() ? <CartPage/> : <Navigate to="/login" replace={true} />} />
          <Route path="order" element={ this.isAuthenticated() ? <OrderPage/> : <Navigate to="/login" replace={true} />} />
          <Route path="orders" element={ this.isAuthenticated() ? <OrdersPage/> : <Navigate to="/login" replace={true} />} />
        </Routes>
      </Fragment>
    )
  }
}
