const express = require("express")
const router = express.Router()
const { login, signup, users, profile, deleteProfile,createSeller,getSellerProfile} = require("../controllers/usersController.js")
const { authentication,authorization} = require("../middlewares/auth.js")

router.post("/signup", signup)

router.post("/login", login)
// for admin only
router.get("/users", authentication, authorization("admin"), users)

// for admin and user
router.get("/profile", authentication, authorization("admin", "user"), profile)
// for admin
router.delete("/profile/:id", authentication, authorization("admin"), deleteProfile)

// seller signup
router.post("/sellerSignup",createSeller)

// seller Profile
router.get("/getSellerProfile",authentication,authorization("seller"),getSellerProfile)
module.exports = router
