const users = require("../models/userModels.js")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config()
exports.signup = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const checkEmail = await users.findOne({ email: email })
        if (checkEmail) {
            res.status(409).json({ message: "Email already existed" })
        }
        const encryptPassword = await bcryptjs.hash(password, 12)
        // console.log(encryptPassword)
        const createUser = await users.create({
            name: name,
            email: email,
            password: encryptPassword
        })
        res.json({ message: "user signup sucessful", data: createUser })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error })
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await users.findOne({ email: email })
        if (!user) {
            return res.status(200).json({ message: "Invalid Email/Password" })
        }
        const passwordCheck = await bcryptjs.compare(password, user.password)
        if (passwordCheck) {
            const token = await jwt.sign({ name: user.name, email:user.email }, process.env.jwt_secret_key, { expiresIn: "20m", algorithm: "HS256" })
            return res.status(200).json({ message: "login sucessful", data: user, token: token })
        } else {
            return res.status(400).json({ message: "Invalid Not found" })
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error })
    }
}

exports.users = async (req, res) => {
    try {
        const data = await users.find()
        res.json({ message: "users fetched sucessfully", data: data })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error })
    }
}

exports.profile = async (req, res) => {
    try {
        res.json({ message: "Profile opened sucesfully" })
    } catch (error) {
        console.log(error)
        res.status(404).json({ error: error.message })
    }
}


exports.deleteProfile = async (req, res) => {
    try {
        res.json({ message: "Profile deleted sucesfully" })
    } catch (error) {
        console.log(error)
        res.status(404).json({ error: error.message })
    }
}