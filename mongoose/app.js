const express=require("express")
const app=express()
const dotenv=require("dotenv")
dotenv.config()
const productRoutes=require("./routes/productsRoutes.js")
const {connectDB}=require("./configs/db.js")

connectDB()
app.use(express.json())
app.use(express.urlencoded())

app.get("/",(req,res)=>{
    res.send("Mongoose default API")
})

app.use("/api/v1/products",productRoutes)

app.use((req,res,next)=>{
    res.status(404).json({message:"API not found with given URL " +req.method + " endpoint: "+req.url})
})
app.listen(process.env.port,()=>console.log("Server started on port "+process.env.port))