import React, { Component } from 'react'
import LoginForm from "../forms/LoginForm"
import {FlushMessageDanger} from '../messages/FlushMessage'
import {Navigate} from 'react-router-dom'
import { loginUser } from "../apis/user_api"
import { getCartProduct } from "../apis/cart_api";

class Login extends Component {

    constructor(props)
    {
        super(props)
    }
 
    // submit = data=>{
    //     loginUser(data).then(res => {
    //       this.setState({success : true})
    //       localStorage.setItem('user_id' , res._id)
    //       this.props.login()
    //       getCartProduct({user_id : localStorage.getItem('user_id')}).then(res => {
    //         console.log("cart details" , res)
    //         localStorage.setItem('cart_id'  , res[0]._id)
    //       })
    //     })
    //     .catch(error => {this.setState({success : false})
    //       console.log("error" , error.response)
    //     })
    //     this.setState({try:true})
    // }
    render() {
        
        
        return (
            <div className="container" style={{width:"500px"}}>
              <LoginForm login = {this.props.login} submit = {this.submit}/>
            </div>
        )
    }
}

export default Login