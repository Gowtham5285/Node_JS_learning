const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        required: true,
        trim: true,
        enum: ["admin", "user", "seller"],
        default: "user"
    },
    products: [{type:mongoose.Schema.Types.ObjectId,ref:"products"}]
})

module.exports = mongoose.model("users", userSchema)