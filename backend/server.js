import express from 'express';
const app=express();
import data from './data.js'
app.listen(5000,(req,res)=>
{
    console.log("Server Running at 5000");
})

app.get("/product",(req,res)=>
{  
    res.send(data.products);

})
app.get("/product/slug/:slug",(req,res)=>
{  
    const product=data.products.find(x=>x.slug==req.params.slug);
    if(product)
    {
        res.send(product);
    }
    else{
        res.status(404).send({message:'Product Not Found '});
    }

})