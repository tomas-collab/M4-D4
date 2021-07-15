
import React from "react"
import { Button,ListGroup } from "react-bootstrap"




   const DeleteComment = async(asin)=>{
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin,{
                method:'DELETE',
                headers:{"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGU2ZTg4NzE1ODFjMzAwMTUzNmI1MDciLCJpYXQiOjE2MjU3NDU1NDMsImV4cCI6MTYyNjk1NTE0M30.lLm8P6JbqRK-l2zbSN_SYDhgHrTeYpRz02skYuZHTZ4"}
            })
            if(response.ok){
                alert('comment deleted')
            }else{
                alert('comment not deleted')
            }
        } catch (error) {
            console.log(error)
        }
    }
     const SingleComment = ({deleteCom}) =>(
        (
            <ListGroup>
                 {deleteCom.comment}
                <Button variant='danger' className='ml-2' onClick={()=>DeleteComment(deleteCom._id)}>Delete</Button>
        </ListGroup>
        )
     )


export default SingleComment