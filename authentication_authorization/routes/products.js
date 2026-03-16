const express = require("express")
const router = express.Router()
const {allProducts,addProducts,deleteProducts}=require("../controllers/productsController.js")
const {authentication,authorization}=require("../middlewares/auth.js")
const {multerUpload}=require("../middlewares/uploads.js")

router.get("/allProducts",authentication,authorization("seller","user"),allProducts)

// add Products
router.post("/addProduct",multerUpload.array("images",5),authentication,authorization("seller"),addProducts)

// Delete Products
router.delete("/deleteProduct/:pid",authentication,authorization("seller"),deleteProducts)

module.exports = router
