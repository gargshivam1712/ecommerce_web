import React from "react"
import {Route,Navigate} from "react-router-dom"


const PrivateRoute=({component:Component,auth,...rest})=>{
    return <Route {...rest}
    render = {
        props=>{    
              
            if(!localStorage.getItem('authenticated')){
                return <Navigate to="/dashboard" replace={true}  />
            }
            else
            return <Component {...props}/>
        }
    }
    />
}

export default PrivateRoute