const express=require("express")
const router =express.Router()
const {getAllProducts,addProduct,addNewTitle}=require("../controllers/productsControllers.js")
router.get("/getProducts",getAllProducts)
router.post("/addProduct",addProduct)
router.post("/addNewTitle",addNewTitle)

module.exports=router