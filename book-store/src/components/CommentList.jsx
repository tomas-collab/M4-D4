import { Component } from "react";

import Comments from './Comments'
class CommentList extends Component{
    render(){ 
        return(
           <>
                 
                 <Comments comment={this.props.comment}  onCommentDelete={this.props.onCommentDelete} />
                      
                )
            
           </>
            )
    }
}
export default CommentList