import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class Comments extends Component{
DeleteComment=async()=>{
     const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/'+this.props.id,{
         method:'DELETE',
         headers:{"Authorization":  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGZjMTYzODNhODhhNDAwMTViNmY0ZTUiLCJpYXQiOjE2MjcxMzM0OTYsImV4cCI6MTYyODM0MzA5Nn0.GC_DZqQrwV0rsDIyScw1PPqVHFHSw44lGlDV4VA4QT4"}
     })
     if(response.ok){
        this.props.onCommentDelete(this.props.id)
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