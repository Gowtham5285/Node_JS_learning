const express = require("express")
const router = express.Router()
const {allProducts,addProducts,deleteProducts}=require("../controllers/productsController.js")
const {authentication,authorization}=require("../middlewares/auth.js")


router.get("/allProducts",authentication,authorization("seller","user"),allProducts)

// add Products
router.post("/addProduct",authentication,authorization("seller"),addProducts)

// Delete Products
router.delete("/deleteProduct/:pid",authentication,authorization("seller"),deleteProducts)

module.exports = router
