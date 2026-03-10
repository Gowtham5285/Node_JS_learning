const express=require("express")
const app=express()
const userRoutes=require("./routes/users.js")
const {connectDB}=require("./config/db.js")
const productRoutes=require("./routes/products.js")
require("dotenv").config()
connectDB()
app.use(express.json())
app.use(express.urlencoded())
app.use("/user",userRoutes)
app.use("/product",productRoutes)
app.get("/",(req,res)=>{
    res.send("I am Default API in authentication")
})


app.listen(3000,()=>{console.log("Server Started on port 3000")})