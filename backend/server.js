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