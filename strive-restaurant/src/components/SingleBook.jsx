import {Component} from 'react'
import{Card, ListGroup, Row} from 'react-bootstrap'
import CommentForm from './CommentForm'
import Comments from './comments'
import deleteComment from './DeleteComment'




class SingleBook extends Component{
  state = {
      selected:false
      
  }
    render(){
        return(  
          <>
            <Row className=''>
             <Card className='my-3 grid-child' onClick={()=>this.setState({selected:!this.state.selected})}
             style={{width:'250px',height:'auto'}}
           >
             <Card.Img variant="top" src={this.props.item.img} 
                className=''
                style={{width:'249px', height:'100px',objectFit:'cover'}}
                  />
                     <Card.Body>
                    <Card.Title>{this.props.item.title}</Card.Title>
                    </Card.Body>
                </Card>
                <Card className='grid-child my-3' style={{width:'250px',height:'auto'}}>
                {this.state.selected && <Comments asin={this.props.item.asin}/>}
                {this.state.selected && <CommentForm Asin={this.props.item.asin}/>}
                {this.state.selected && <deleteComment delete={this.props.item.asin}/>}
            
                </Card>
                </Row>
                </>
                )
            }
        }
export default SingleBook
