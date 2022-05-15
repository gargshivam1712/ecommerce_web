import React from "react"
import {Route , Navigate} from "react-router-dom"

const GuestRoute=({component:Component,auth,...rest})=>{
    console.log(localStorage.getItem('authenticated') , "rsult")
    return <Route {...rest}
    render = {
        props=>{     
            
            if(localStorage.getItem('authenticated')){

                return <Navigate to="/dashboard" replace={true} />
            }
            else
            return <Component {...props}/>
        }
    }
    />
}

export default GuestRoute