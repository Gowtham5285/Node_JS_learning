const mongoose=require("mongoose")
require("dotenv").config()

exports.connectDB=async()=>{
    try {
        await mongoose.connect(process.env.mongoURI,{dbName:process.env.dbName})
        console.log("Db connected sucessfully")
    } catch (error) {
        console.log(error)
    }
}