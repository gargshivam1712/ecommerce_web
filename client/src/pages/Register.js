import React, { Component } from 'react'
import RegisterForm from "../forms/RegisterForm"
import {FlushMessageDanger} from '../messages/FlushMessage'
import {Navigate} from 'react-router-dom'
import { registerUser } from "../apis/user_api"


class Register extends Component {

    state = {
        success : false,
        try:false
    }
        
    submit = data=>{
        console.log(data , "register")
        this.setState({try:true})
        registerUser(data).then(res => {
          this.setState({success : true})
          localStorage.setItem('user_id' , res._id)
          this.props.login()
        })
    }
    render() {
        
        if(this.state.success){
            return <Navigate to="/" replace={true} />
        }
        return (
            <div className="container" style={{width:"500px"}}>
              {
                  this.state.try && !this.state.success && <FlushMessageDanger message="Invalid Username and Password" /> 
              }
              <RegisterForm submit = {this.submit}/>
            </div>
        )
    }
}

export default Register