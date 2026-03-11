const express = require("express")
const router = express.Router()
const {allProducts}=require("../controllers/productsController.js")
const {authentication,authorization}=require("../middlewares/auth.js")


router.get("/allProducts",authentication,authorization("user"),allProducts)

module.exports = router
