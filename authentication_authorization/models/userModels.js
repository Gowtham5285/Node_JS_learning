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
    products: [{type:mongoose.Schema.Types.ObjectId,ref:"products"}],
    profile_pic:{
        filePath:{
            type:String,
            trim:true,
            default:"default"
        },
        fileURL:{
            type:String,
            trim:true,
            default:"https://t4.ftcdn.net/jpg/16/99/56/69/360_F_1699566919_akoqx36UfNuuorGejGui5x01xcjb6ACy.jpg"
        }
    }
})

module.exports = mongoose.model("users", userSchema)