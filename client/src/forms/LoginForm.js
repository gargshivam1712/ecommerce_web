import React ,{Component,Fragment} from "react";
import Message from "../messages/Message";
import { Link } from 'react-router-dom'
import { loginUser } from "../apis/user_api";
import {FlushMessageDanger} from '../messages/FlushMessage'
import {Navigate} from 'react-router-dom'
import { getCartProduct } from "../apis/cart_api";

class LoginForm extends Component
{
    state={
        data:{
            email:'',
            password:''
        },
        loading:false,
        error:{} , 
        success : false
    }

    onChange=(e)=>{
        this.setState({
            data:{...this.state.data,[e.target.name]:e.target.value}
        })
    }

    onSubmit=(e)=>
    {
        e.preventDefault()
        const error = this.validate(this.state.data)
        this.setState({ error:error });
        if (Object.keys(error).length===0)
        {   
            this.setState({
                loading : true
            })
            loginUser(this.state.data)
            .then(res => {
                this.setState({loading : false , success : true})
                localStorage.setItem('user_id' , res._id)
                this.props.login()
                getCartProduct({user_id : res._id}).then(res1 => {
                    console.log("cart id" ,res1)
                    localStorage.setItem('cart_id'  , res1._id)
                })
            })
            .catch(err => {
                this.setState({error : {global : true} , loading : false})
            })
                    
        }
    }

    validate = (data)=>{
        const error = {};
        if (!data.email) error.email="Email Must be required"
        if (!data.password) error.password="Password Must be required"
        return error;
    }

    render()
    {
        const {data,error} = this.state;
        if(this.state.success){
            return <Navigate to="/" replace={true} />
        }
        return (
            <Fragment>
            {
                this.state.error.global && <FlushMessageDanger message="Invalid Username and Password" /> 
            }
            <h1>Login Form</h1>
            <form   onSubmit={this.onSubmit} >
                <div className='from-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' id='email' placeholder='Email' value={data.email} onChange={this.onChange} className='form-control'/>
                </div>
                <Message message={error.email}/>
                <div className='from-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' id='password' placeholder='Password' value={data.password} onChange={this.onChange} className='form-control'/>
                </div>
                <Message message={error.password}/>
                {
                    this.state.loading ? <p><button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true">  </span>
                      Submit...
                  </button></p> : <p><input type='submit' className='btn btn-primary' name='submit' /></p>
                }
                
                <Link to = '/register'>Sign up New User</Link>
            </form>
            </Fragment>
        )
    }
}



export default LoginForm