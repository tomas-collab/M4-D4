import React,{ Component } from "react";
import {ListGroup} from 'react-bootstrap'
import { Prev } from "react-bootstrap/esm/PageItem";
import SingleComment from "./DeleteComment";


class Comments extends Component{
    state = {
        collection:[],
        isError:false
    }
  componentDidUpdate = async(PrevProps,prevState,snapshot)=>{
      console.log('component did update',PrevProps.book, this.props)
    if(this.props.book && (!PrevProps.book || PrevProps.book.asin !== this.props.book.asin)){
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin,{
                headers:{"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGU2ZTg4NzE1ODFjMzAwMTUzNmI1MDciLCJpYXQiOjE2MjU3NDU1NDMsImV4cCI6MTYyNjk1NTE0M30.lLm8P6JbqRK-l2zbSN_SYDhgHrTeYpRz02skYuZHTZ4"}
            })
            if(response.ok){
                let data =await response.json()
                this.setState({
                    collection:data
                });
            }else{
              this.setState({isError:true})
            }
        } catch (error) {
            
        }
    }
  }
  componentDidMount = async()=>{
         try {
             let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin,{
                 headers:{"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGU2ZTg4NzE1ODFjMzAwMTUzNmI1MDciLCJpYXQiOjE2MjU3NDU1NDMsImV4cCI6MTYyNjk1NTE0M30.lLm8P6JbqRK-l2zbSN_SYDhgHrTeYpRz02skYuZHTZ4"}
             })
             if(response.ok){
                 let data =await response.json()
                 this.setState({
                     collection:data
                 });
             }else{
               this.setState({isError:true})
             }
         } catch (error) {
             
         }
 }

    render(){
        return(
                   <ListGroup>
                       {this.state.collection.map(c=>
                       <p>{c.comment}</p>
                       )
                         
                        //   <SingleComment deleteCom={c}/>
                       }
                   </ListGroup>

        )
    }
}



export default Comments