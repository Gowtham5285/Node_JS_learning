const {getProducts,insertItem,addTitle}=require("../config/mongodb.js")
const getAllProducts = async(req, res) => {
    const products = await getProducts()
    res.json(products)
}
const addProduct=async(req,res)=>{
    const data=await insertItem(req.body)
    res.json({message:"data added sucessfully",data})
}

const addNewTitle=async(req,res)=>{
    const data = await addTitle(req.body)
    res.json({message:"new title added",data})
}
module.exports = { getAllProducts ,addProduct,addNewTitle}