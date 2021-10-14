import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class Comments extends Component{
DeleteComment=async()=>{
     const response = await fetch(`${process.env.REACT_APP_PORT}/comments/`+this.props.comment.elementId,{
         method:'DELETE',
         
     })
     if(response.ok){
        this.props.onCommentDelete(this.props.comment.elementId)
     }
}


    render(){
        return(
               <ListGroup>
                  <p> {this.props.comment.comment}</p> 
                  <p>rate: { this.props.comment.rate}</p> 
                   <button onClick={this.DeleteComment}>delete</button>
               </ListGroup>
        )
    }
}

export default Comments