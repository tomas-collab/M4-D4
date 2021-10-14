import { Component } from "react";
import {Spinner} from 'react-bootstrap'

class Loading extends Component{
    render(){
        return(
            <Spinner animation="border" role="status">
            
          </Spinner>
        )
    }
}
export default Loading