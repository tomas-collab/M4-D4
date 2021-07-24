import React,{ Component } from "react";
import {ListGroup} from 'react-bootstrap'
import { Prev } from "react-bootstrap/esm/PageItem";
import SingleComment from "./DeleteComment";


class Comments extends Component{
    state = {
        collection:[],
        isError:false
    }
  componentDidUpdate = async(PrevProps)=>{
      console.log('component did update',PrevProps.book, this.props)
    if(this.props.asin && (!PrevProps.asin || PrevProps.asin._id !== this.props.asin._id)){
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin,{
                headers:{"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGZjMTYzODNhODhhNDAwMTViNmY0ZTUiLCJpYXQiOjE2MjcxMzM0OTYsImV4cCI6MTYyODM0MzA5Nn0.GC_DZqQrwV0rsDIyScw1PPqVHFHSw44lGlDV4VA4QT4"}
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
                 headers:{"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGZjMTYzODNhODhhNDAwMTViNmY0ZTUiLCJpYXQiOjE2MjcxMzM0OTYsImV4cCI6MTYyODM0MzA5Nn0.GC_DZqQrwV0rsDIyScw1PPqVHFHSw44lGlDV4VA4QT4"}
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