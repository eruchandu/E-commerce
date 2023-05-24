import { useEffect, useState } from 'react';
import data from '../data';
import { Link } from 'react-router-dom';
import axios from 'axios'
function HomeScreen()
{
   let [products,setProdroducts]=useState([]);
   useEffect(()=>
   {
   const fetchData=async()=>
   {
      let res=await axios.get("/product");
      setProdroducts(res.data);
   }
   fetchData();
   },[])
     return (
        <div>
                     <h1> List of featured products</h1>
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
         
         
        
        </div>
     );
}
export  default HomeScreen;