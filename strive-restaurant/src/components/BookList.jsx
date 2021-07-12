
import { Component } from "react";
import {FormControl,Form,Row,Col} from 'react-bootstrap'
import Fantasy from './Fantasy.json'
import SingleBook from "./SingleBook";


class BookList extends Component{
    state = {
        Books:Fantasy,
        search: ""
    }
    render(){
        const {Books,search} = this.state
        return(
            <>
                <Row>
                 <Form>Search Books
                <FormControl 
                className="my-4"
                type="text"
                 
                 value={this.state.value}
                 onChange={(e)=>this.setState({search:e.currentTarget.value.toLowerCase()})}
                />
                </Form>
                </Row>
                
                <Row>
                {
                     Books
                     .filter(book=> (book.title.toLowerCase().includes(search)))
                     .map(book=>
                  
                        <Col className="col-lg-6 d-flex"  >
                        <SingleBook item={book}/>
                        
                        </Col>   )
                }      
     </Row>
</>
        )
    }
}

export default BookList