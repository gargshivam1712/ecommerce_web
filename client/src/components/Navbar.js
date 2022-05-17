import React, { Component} from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light">

                <div className="collapse navbar-collapse container" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                    <Link to='/' className='nav-link'>Home</Link>
                    </li>
                </ul>
                {
                    !this.props.authenticated?
                    <ul className="navbar-nav navbar-right ">
                        <li className="nav-item">
                            <Link to='/login' className='nav-link' >Login</Link>
                        </li>
                    </ul>:
                    <ul className="navbar-nav navbar-right">
                         <li className="nav-item">
                            <Link to ='/orders' className='nav-link' >Order Details</Link>
                        </li>
                        <li className="nav-item">
                            <Link to ='/cart' className='nav-link' >Cart</Link>
                        </li>
                        <li className="nav-item">
                            <Link to ='/' className='nav-link' onClick={this.props.logout}>Logout</Link>
                        </li>
                        
                    </ul>
                }
                </div>
            </nav>

        )
    }
}


export default Navbar