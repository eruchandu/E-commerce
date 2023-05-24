import { useParams } from "react-router-dom";
import { useEffect, useState,useReducer } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import logger from 'use-reducer-logger'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Rating from "../components/Rating";
import Card  from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/esm/Button";
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

const reducer=(state,action)=>{
  switch(action.type)
  {
     case 'FETCH_REQUEST':
        return {...state,loading:true};
     case 'FETCH_SUCCESS':
         return {...state,product:action.payload,loading:false};   
     case 'FETCH_FAIL    ':
      return {...state,error:action.payload,loading:false};
     default:
        return state; 
   }
};

function ProductScreen()
{
  const param=useParams();
  const {slug}=param;
  const[{loading,error,product},dispatch]=useReducer(reducer,{loading:true,error:'',products:[] });
   useEffect(()=>
   {
   const fetchData=async()=>
   {
      dispatch({type:'FETCH_REQUEST'});
      try{
         let res=await axios.get(`/product/slug/${slug}`);
         dispatch({type:'FETCH_SUCCESS',payload:res.data})
      }catch(err)
      {
         dispatch({type:'FETCH_FAIL',payload:err.message})
      }
      
      //setProdroducts(res.data);
   }; 
   fetchData();
   },[slug])
    
  return(
    <div>
     {loading?<LoadingBox></LoadingBox>:error?<MessageBox variant="danger">{error}</MessageBox>:<div>
      <Row>
        <Col md={6}> <img src={product.image}></img></Col>
        <Col md={3}> 
        <ListGroup>
          <ListGroup.Item>
            <h1> {product.name}</h1>
          </ListGroup.Item>
          <ListGroup.Item>
            <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
          </ListGroup.Item>
          <ListGroup.Item>
            Price : ${product.price}
          </ListGroup.Item>
          <ListGroup.Item>
            Description : {product.description}
          </ListGroup.Item>
        </ListGroup>
        
        </Col>
        <Col md={3}> 
        <Card>
          <Card.Body>
          <ListGroup>
          <ListGroup.Item>
            price $: {product.price}
          </ListGroup.Item>
          <ListGroup.Item>
            {product.countInStock>0?<Badge bg="success">Aviliable</Badge> :<Badge bg="danger"> Not Aviliable</Badge>} 
          </ListGroup.Item>
          
          
            <Button className="btn btn-warning btn-outline-dark  my-3"> Add to Cart</Button>
          
        </ListGroup>

          </Card.Body>
        </Card>
        </Col>
      </Row>
     </div>}
    
    </div>
  )

}
export default ProductScreen;