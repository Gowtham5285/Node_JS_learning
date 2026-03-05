const Products = require("../models/productsModel.js")

exports.getAllProducts = async (req, res) => {
    try {
        const data=await Products.find();
        res.status(200).json({message:"Fetched all products",data:data})
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Something went wrong, try again" })
    }
}

exports.createProduct = async (req, res) => {
    try {
        const createProduct = await Products.insertOne(req.body)
        res.status(201).json({ message: "Product created sucessfully", data: createProduct })
    }
    catch (error) {
        console.log(error)
        res.status(400).json({ message: "Something went wrong, try again" })
    }
}

exports.updateProduct = (req, res) => {
    res.send("update done sucessfully")
}

exports.deleteProduct = (req, res) => {
    res.send("deleted product sucessfully")
}