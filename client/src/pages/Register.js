import React, { Component } from 'react'
import RegisterForm from "../forms/RegisterForm"

class Register extends Component {
        
    render() {
        
        return (<div className="container" style={{width:"500px"}}>
                    <RegisterForm login = {this.props.login} submit = {this.submit}/>
                </div>
        )
    }
}

export default Register