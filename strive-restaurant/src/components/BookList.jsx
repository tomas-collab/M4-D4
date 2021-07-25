import { Component } from "react";
import { Row,Container,Col } from "react-bootstrap";
import fantasy from './Fantasy.json'
import SingleBook from "./SingleBook";

class BookList extends Component{
    render(){
        return( 
            <Container>
                  <Row>
                {fantasy.map(book=>
                    <Col>
                    <SingleBook book={book}/>
                    </Col>
                    )}
                  </Row>
            </Container>  
        )
    }
}
export default BookList