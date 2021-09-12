import { Component } from "react";
import CommentList from "./CommentList";
import {Card} from 'react-bootstrap'
import CommentForm from './CommentForm'

class SingleBook extends Component{
    state = {
        selected:false,
        comment:[]
    }
   
render(){
        return(
            
            <Card  onClick={()=>this.setState({selected:!this.state.selected})} style={{ border:this.state.selected?"1px solid green": "1px solid white"}}>
                    <Card.Img variant="top" src={this.props.book.img} />
                    <Card.Body>
                        <Card.Title>{this.props.book.title}</Card.Title>
                    </Card.Body>
                    {this.state.selected && <CommentList  onCommentDelete={this.onCommentDelete} comment={this.state.comment}
                        
                    /> }
                    <CommentForm onAddComment={this.onAddComment} Asin={this.props.book.asin}/>
            </Card>        
        )}
onCommentDelete=(deletedComment)=>{
    this.setState({
        comment:this.state.comment.filter(comm=>comm._id!==deletedComment)
    })
}
onAddComment=(addedComment)=>{
 this.setState({
     comment:[...this.state.comment,addedComment]
 })
}

componentDidMount = async()=>{
    // http://localhost:3001/comments/
     const response = await fetch(`${process.env.REACT_APP_PORT}/comments/`+this.props.book.asin)
     const data = await response.json()
     if(response.ok){
         this.setState({comment:data})

     }
 }
 

}
export default SingleBook