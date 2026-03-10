const jwt = require("jsonwebtoken")
require("dotenv").config()
const users = require("../models/userModels.js")


exports.authentication = async (req, res, next) => {
    try {
        const { authorization } = req.headers
        if (!authorization) {
            return res.status(400).json({ message: "Missing authorization field" })
        }
        const token = authorization.split(" ")[1]
        const decodeToken = jwt.verify(token, process.env.jwt_secret_key)
        console.log(decodeToken.userInfo._id)
        const userData = await users.findById(decodeToken.userInfo._id)
        if (userData) {
            next()
        }else{
            res.status(401).json({message:"Invalid Token"})
        }
    } catch (error) {
        console.log(error)
        res.status(401).json({ message: error.message })
    }
}