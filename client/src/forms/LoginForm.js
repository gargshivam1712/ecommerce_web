import React ,{Component,Fragment} from "react";
import Message from "../messages/Message";
import { Link } from 'react-router-dom'

class LoginForm extends Component
{
    state={
        data:{
            email:'',
            password:''
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
        return error;
    }

    render()
    {
        const {data,error} = this.state;
        return (
            <Fragment>
                
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
                <p><input type='submit' className='btn btn-primary' name='submit' /></p>
                
            </form>
            </Fragment>
        )
    }
}



export default LoginForm