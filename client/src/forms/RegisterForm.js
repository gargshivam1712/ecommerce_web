import React ,{Component,Fragment} from "react";
import Message from "../messages/Message";
import { Link } from 'react-router-dom'

class RegisterForm extends Component
{
    state={
        data:{
            name : '', 
            email:'',
            password:'',
            confirm_password : ''

        },
        loading:true,
        error:{}
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
            this.props.submit(this.state.data)
                    
        }
    }

    validate = (data)=>{
        const error = {};
        if (!data.email) error.email="Email Must be required"
        if (!data.password) error.password="Password Must be required"
        if (!data.confirm_password) error.confirm_password="Confirm Password Must be required"
        if (!data.name) error.name="Name Must be required"
        return error;
    }

    render()
    {
        const {data,error} = this.state;
        return (
            <Fragment>
                
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
                <p><input type='submit' className='btn btn-primary' name='submit' /></p>
                
            </form>
            </Fragment>
        )
    }
}



export default RegisterForm