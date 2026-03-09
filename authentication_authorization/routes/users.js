const express = require("express")
const router = express.Router()
const {login,signup,users}=require("../controllers/usersController.js")
router.post("/signup", signup)

router.post("/login", login)

router.get("/users",users)

module.exports = router
