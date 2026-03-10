const express = require("express")
const router = express.Router()
const {login,signup,users}=require("../controllers/usersController.js")
const {authentication}=require("../middlewares/auth.js")
router.post("/signup", signup)

router.post("/login", login)

router.get("/users",authentication,users)

module.exports = router
