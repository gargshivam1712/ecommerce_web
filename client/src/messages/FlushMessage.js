import React from 'react'


export const FlushMessageDanger = ({message})=>{
    return <div className="container">
  
    <div className="alert alert-danger alert-dismissible">
    {message}  <button style={{"float" : "right"}} type="button" className="close" data-dismiss="alert">&times;</button>
    </div>
   
  </div>
}

export const FlushMessageSuccess = ({message})=>{
    return <div className="container">
    <div className="alert alert-success alert-dismissible">
    {message}   <button style={{"float" : "right"}} type="button" className="close" data-dismiss="alert">&times;</button>
    </div>
   
  </div>
}



