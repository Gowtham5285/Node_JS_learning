const { MongoClient, ObjectId } = require("mongodb")
const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri)
let db;
const connectDB = async () => {
    try {
        await client.connect();
        db = client.db("node_mongodb")
        console.log("db is connected")
        return db;
    } catch (error) {
        console.log("DB is not connected check correctly", error)
    }
}
const getProducts = async () => {
    const data = await db.collection("Products").find().toArray()
    return data
}
const   insertItem=async(body)=>{
    console.log(body)
    const data=await db.collection("Products").insertOne({name:body.name})
    return data
}

const addTitle=async(body)=>{
    console.log(body)
    const data = await db.collection("Products").insertOne({title:body.title})
    return data
}
module.exports = { connectDB, getProducts, insertItem, addTitle}