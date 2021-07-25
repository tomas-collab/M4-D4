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
            
            <Card  onClick={()=>this.setState({selected:!this.selected})} style={{ width: '18rem' }}>
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
     const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/'+this.props.book.asin,{
        headers:{
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGZjMTYzODNhODhhNDAwMTViNmY0ZTUiLCJpYXQiOjE2MjcxMzM0OTYsImV4cCI6MTYyODM0MzA5Nn0.GC_DZqQrwV0rsDIyScw1PPqVHFHSw44lGlDV4VA4QT4"}
     })
     const data = await response.json()
     if(response.ok){
         this.setState({comment:data})

     }
 }
 

}
export default SingleBook