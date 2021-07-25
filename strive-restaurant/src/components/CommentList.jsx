import { Component } from "react";

import Comments from './Comments'
class CommentList extends Component{
    render(){ 
        return(
           <>
                 {
                     this.props.comment && this.props.comment.map(comm=><Comments onCommentDelete={this.props.onCommentDelete} id={comm._id} comment={comm}/>
                      
                )
            }
           </>
            )
    }
}
export default CommentList