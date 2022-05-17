import React ,{Component,Fragment} from "react";
import Message from "../messages/Message";
import { Link } from 'react-router-dom'
import {Navigate} from 'react-router-dom'
import { registerUser } from "../apis/user_api"
import { createCart } from "../apis/cart_api"
import {FlushMessageDanger} from '../messages/FlushMessage'

class RegisterForm extends Component
{

    constructor(props)
    {
        super(props)
    }

    state={
        data:{
            name : '', 
            email:'',
            password:'',
            confirm_password : ''

        },
        loading:false,
        error:{},
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
            this.setState({loading : true})
            registerUser(this.state.data)
            .then(res => {
                createCart({user_id : res._id}).then(res => localStorage.setItem('cart_id' , res._id))
                this.setState({success : true , loading : false})
                localStorage.setItem('user_id' , res._id)
                this.props.login()
            })
            .catch(err => {
                console.log(err , "error msg")
                this.setState({ error : { global : 'invalid'} })
                this.setState({loading : false})
            })
        }
    }

    validate = (data)=>{
        const error = {};
        if (!data.email) error.email="Email Must be required"
        if (!data.password) error.password="Password Must be required"
        if (!data.confirm_password) error.confirm_password="Confirm Password Must be required"
        if (!data.name) error.name="Name Must be required"
        if (data.confirm_password && data.password && !(data.confirm_password === data.password)) error.confirm_password = "Password Must be match"
        return error;
    }

    render()
    {
        const {data,error} = this.state;
        console.log("state" , this.state)
        if(this.state.success){
            return <Navigate to="/" replace={true} />
        }
        return (
            <Fragment>

            {this.state.error.global && <FlushMessageDanger message="Some issue in registration" />}
                
            <h1>Register Form</h1>
            <form   onSubmit={this.onSubmit} >
                <div className='from-group'>
                    <label htmlFor='name'>Full Name</label>
                    <input type='text' name='name' id='name' placeholder='Full Name' value={data.name} onChange={this.onChange} className='form-control'/>
                </div>
                <Message message={error.name}/>
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
                <div className='from-group'>
                    <label htmlFor='confirm_password'>Confirm Password</label>
                    <input type='password' name='confirm_password' id='confirm_password' placeholder='Confirm Password' value={data.confirm_password} onChange={this.onChange} className='form-control'/>
                </div>
                <Message message={error.confirm_password}/>
                {
                    this.state.loading ? <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Submit...
                  </button> : <p><input type='submit' className='btn btn-primary' name='submit' /></p>
                }
                
            </form>
            </Fragment>
        )
    }
}



export default RegisterForm