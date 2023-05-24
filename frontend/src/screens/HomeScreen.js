import { useEffect, useState,useReducer } from 'react';
import data from '../data';
import { Link } from 'react-router-dom';
import axios from 'axios'
import logger from 'use-reducer-logger'
const reducer=(state,action)=>{
   switch(action.type)
   {
      case 'FETCH_REQUEST':
         return {...state,loading:true};
      case 'FETCH_SUCCESS':
          return {...state,products:action.payload,loading:false};   
      case 'FETCH_FAIL    ':
       return {...state,error:action.payload,loading:false};
      default:
         return state; 
    }
};
function HomeScreen() 
{
   //let [products,setProdroducts]=useState([]);
   const[{loading,error,products},dispatch]=useReducer(logger(reducer),{loading:true,error:'',products:[] });
   useEffect(()=>
   {
   const fetchData=async()=>
   {
      dispatch({type:'FETCH_REQUEST'});
      try{
         let res=await axios.get("/product");
         dispatch({type:'FETCH_SUCCESS',payload:res.data})
      }catch(err)
      {
         dispatch({type:'FETCH_FAIL',payload:err.message})
      }
      
      //setProdroducts(res.data);
   }; 
   fetchData();
   },[])
     return (
        <div>
                     <h1> List of featured products</h1>
                     {loading?<div> Loading ....</div>:error?<div>{error.message}</div>:
                     <div className="products">
         {
          products.map((product)=>(<div key={product.slug} className="product">
          <Link to={`/product/${product.slug}`}><img src={product.image}></img> </Link>
          
          <div className="product-info">
          <Link to={`/product/${product.slug}`}>${product.name}</Link>
          
          <p > <strong>${product.price} </strong></p>
          <p > {product.brand}</p>
          <button> Add to cart</button>
          </div>
          </div>))
         }
         </div>
      }
        
         
         
        
        </div>
     );
}
export  default HomeScreen;