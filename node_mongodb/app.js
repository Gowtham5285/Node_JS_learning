const express=require("express")
const app=express()
const productsRoutes=require("./routes/productRoutes.js")
const {connectDB}=require("./config/mongodb.js")
connectDB()

app.use(express.json())
app.use("/products",productsRoutes)
app.get("/",(req,res)=>{
    res.send("hello i am express server")
})
app.listen(3000,()=>console.log("Server Started on port 3000"))