const users = require("../models/userModels.js")
const bcryptjs = require("bcryptjs")
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
        passwordCheck === true ? res.status(200).json({ message: "login sucessful", data: user }) : res.status(400).json({ message: "Invalid Not found" })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error })
    }
}

exports.users = async (req, res) => {
    try {
        res.json({ message: "users list fetched sucessfully", data: [] })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error })
    }
}