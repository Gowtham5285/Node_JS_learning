const products = require("../models/productsModel.js")
const jwt=require("jsonwebtoken")
const users = require("../models/userModels.js")
const {cloudinary}=require("../config/cloudinary.js")

exports.allProducts = async (req, res) => {
    try {
        const productsData = await products.find().populate("sellerId",["name","email","-_id"])
        res.json({ message: "fetched products sucessfully", data: productsData })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error })
    }
}

exports.addProducts=async(req,res)=>{
    try {
      const {title,price,description}=req.body
      const files=await req.files.map(async(val)=>{
        return await cloudinary.uploader.upload(val.path,{ resource_type: "image", folder: "demo_node",public_id:val.fileName})
      })
      console.log(title,price,description)
      const createProduct=await products.create({title:title,price:price,description:description,sellerId:req.user._id})
      const updateInUser=await users.findByIdAndUpdate(req.user._id,{$push:{products:createProduct._id}})
      res.status(200).json({message:"Product added sucessfully",data:createProduct})
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error })
    }
}

exports.deleteProducts=async(req,res)=>{
    try {
        const {pid}=req.params
        const checkProduct=await products.findOne({_id:pid,sellerId:req.user._id})
        if(!checkProduct){
            res.status(404).json({message:"Product not found in your created products"})
        }
        const deleteProduct=await products.deleteOne({_id:pid,sellerId:req.user._id})
        res.status(200).json({message:"product deleted sucessflly"})
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error })
    }
}