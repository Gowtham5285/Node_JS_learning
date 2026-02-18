const express=require("express")
const app=express()
// console.log(app)
app.get("/",(req,res)=>{
    res.send("Hi i am Default API")
})
app.post("/products",(req,res)=>{
    res.header("hdhdhdh","dada")
    res.status(201).send({name:"Ram"})
})
app.post("/students",(req,res)=>{
    res.send(req.query)
})
app.listen(3000,()=>console.log("The Server is started in port 3000"))