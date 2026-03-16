const express = require("express")
const router = express.Router()
const { login, signup, users, profile, deleteProfile, createSeller, getSellerProfile, uploadProfilePicture } = require("../controllers/usersController.js")
const { authentication, authorization } = require("../middlewares/auth.js")
const { multerUpload } = require("../middlewares/uploads.js")
router.post("/signup", signup)

router.post("/login", login)


// upload profile pic
router.put("/uploadProfilePicture", multerUpload.single("profile_pic"), authentication, uploadProfilePicture)

// for admin only
router.get("/users", authentication, authorization("admin"), users)

// for admin and user
router.get("/profile", authentication, authorization("admin", "user"), profile)

// for admin
router.delete("/profile/:id", authentication, authorization("admin"), deleteProfile)

// seller signup
router.post("/sellerSignup", createSeller)

// seller Profile
router.get("/getSellerProfile", authentication, authorization("seller"), getSellerProfile)
module.exports = router
