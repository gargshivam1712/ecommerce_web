import React,{Component} from "react";

class Message extends Component
{

    render()
    {
        return(
        <p style={{color:'red'}}>{this.props.message}</p>
        );
    }
}


export default Message