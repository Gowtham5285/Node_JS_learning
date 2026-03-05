const mongoose=require("mongoose")
require("dotenv").config()
exports.connectDB=async()=>{
    try{
        await mongoose.connect(process.env.mongoURI,{dbName:process.env.databaseName})
        console.log("Database is connected Sucessfully")
    }catch(error){
        console.log({message:"Database is not connected there is some error", error:error})
    }
}