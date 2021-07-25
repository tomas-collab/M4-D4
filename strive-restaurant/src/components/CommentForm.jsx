import { Component } from "react";
import{Container,Row,Col,Form,Button} from 'react-bootstrap'
import Loading from "./Loading";
import WarningSign from "./WarningSign";
 

class CommentForm extends Component{
    state = {
        Loading:false,
        collection:{
            comment:'',
            rate:1,
            elementId: this.props.Asin
        }
    }

    handleInput = (key,value)=>{
        this.setState({
            collection:{
                ...this.state.collection,
                [key]:value
    }
        })
    }
    submitComment = async(e)=>{
          e.preventDefault()
          try {
              let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/',{
                  method:'POST',
                  body:JSON.tringify(this.state.collection),
                  headers:{
                      "Content-Type":'application/json',
                      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGZjMTYzODNhODhhNDAwMTViNmY0ZTUiLCJpYXQiOjE2MjcxMzM0OTYsImV4cCI6MTYyODM0MzA5Nn0.GC_DZqQrwV0rsDIyScw1PPqVHFHSw44lGlDV4VA4QT4"}
              })
              if(response.ok){
                  alert('comment added')
                 this.props.onAddComment(await response.json())
              } else{
                this.setState({Loading:!this.state.Loading})
                 console.log('error')
              }   
          } catch (error) {
             this.setState({Loading:!this.state.Loading})
              console.log(error)
          }
    }

  
    
    render(){
        return(
        <Container>
            <Row className="justify-content-center my-3">
                <Col md={6} className="text-center">
                    <p>comment and rate Book</p>
                    <Form onSubmit={this.submitComment}>
                        <Form.Group>
                            <Form.Label>comment Section</Form.Label>
                            <Form.Control 
                             as="textarea" rows={4}
                             type="textArea" 
                              placeholder="write comment" 

                              value={this.state.collection.comment}
                              onChange={(e)=>{this.handleInput('comment',e.currentTarget.value)}}
                              />
                       </Form.Group>               
                            <Form.Control as="select" size="sm" custom  
                                    
                                            value={this.state.collection.rate}
                                            onChange={(e)=>{this.handleInput('rate',e.target.value)}}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                            </Form.Control>               
                                    <Button variant="success" type="submit">{this.state.Loading&&<Loading/> }save </Button>
                        
                      </Form>
                 </Col>
            </Row>
    </Container>
        )
    }
}

export default CommentForm