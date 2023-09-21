const mongoose = require("mongoose")

const articleShema = new mongoose.Schema({

image:String,
name:String,
price:Number, 
items:Number,
id:Number,

})
const Article  = mongoose.model ("Article" ,articleShema)

module.exports = Article;