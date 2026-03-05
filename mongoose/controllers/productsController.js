const Products = require("../models/productsModel.js")

exports.getAllProducts = async (req, res) => {
    try {
        const { category } = req.query
        if (!category) {
            const data = await Products.find();
            res.status(200).json({ message: "Fetched all products", data: data })
        }
        const categoryData=await Products.find({category:category},{__v:false})
        res.status(200).json({ message: "Fetched products based on Category", data: categoryData})

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

exports.updateProduct = async (req, res) => {
    try {
        const { productID } = req.params
        // const update=await Products.findByIdAndUpdate(productID,{
        //     title:req.body.title,
        //     price:req.body.price,
        //     category:req.body.category,
        //     rating:req.body.rating
        // },{new:true})
        const update = await Products.updateOne({ _id: productID }, {
            title: req.body.title,
            price: req.body.price,
            category: req.body.category,
            rating: req.body.rating
        }, { new: true })
        res.json({ message: "updated sucessfully", data: update })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Something went wrong, try again" })
    }
}

exports.updateCategory = async (req, res) => {
    try {
        const { categoryName } = req.params
        const { newCategory } = req.body
        const updateCategory = await Products.updateMany({ category: categoryName }, { category: newCategory })
        res.json({ message: "category updated sucessfully", data: updateCategory })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Something went wrong, try again" })
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const { productID } = req.params
        const check = await Products.findById(productID)
        if (!check) {
            return res.status(400).json({ message: "Product not found" })
        }
        const deleteProduct = await Products.findByIdAndDelete(productID)
        res.json({ message: "product deleted sucessfully", data: deleteProduct })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Something went wrong, try again" })
    }
}

exports.getProduct = async (req, res) => {
    try {
        const { productID } = req.params
        const product = await Products.findOne({ _id: Object(productID) })
        if (!product) {
            return res.status(404).json({ meassage: "Product not found" })
        }
        res.json({ message: "one product retrived sucessfully", data: product })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Something went wrong, try again" })
    }
}