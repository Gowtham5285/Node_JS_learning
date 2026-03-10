const products = require("../models/productsModel.js")


exports.allProducts = async (req, res) => {
    try {
        const productsData = await products.find()
        res.json({ message: "fetched products sucessfully", data: productsData })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error })
    }
}