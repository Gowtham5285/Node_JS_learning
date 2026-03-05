const mongoose = require("mongoose")
const productsSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String },
    rating: { type: Number }

})

module.exports=mongoose.model("products",productsSchema)