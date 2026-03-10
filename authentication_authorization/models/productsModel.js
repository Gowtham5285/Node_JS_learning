const mongoose = require("mongoose")
const productSchema=new mongoose.Schema({
    title:{
        type:String,
        requiired:true
    },
    price:{
        type:String,
        requiired:true
    },
    description:{
        type:String,
        requiired:true
    }
},{timestamps:true})


module.exports=mongoose.model("products",productSchema)