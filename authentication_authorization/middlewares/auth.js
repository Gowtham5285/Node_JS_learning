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
        console.log(decodeToken.email)
        const userData = await users.findOne({email:decodeToken.userInfo.email})
        if (userData) {
            req.user=userData
            next()
        }else{
            res.status(401).json({message:"Invalid Token"})
        }
    } catch (error) {
        console.log(error)
        res.status(401).json({ message: error.message })
    }
}


exports.authorization = (...roles) => {
    return async (req,res,next) => {
        try {
            // const token=req.headers.authorization.split(" ")[1]
            // const decode=jwt.verify(token,process.env.jwt_secret_key)
            // const check=roles.includes(decode?.userInfo?.role)
            // console.log(token, decode?.userInfo?.role, check)
            // if(check){
            //     next()
            // }
            // else{
            //     return res.status(403).json({message:"Unauthorized user/Role"})
            // }
            const userRole=await users.findById(req.user._id,{role:true})
            console.log(userdata)
            const checkRole=roles.includes(userRole.role)
            if(checkRole){
                next()
            }
            else{
                return res.status(403).json({message:"Unauthorized user/Role"})
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({ message: error })
        }
    }
}
