const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    image: String, //image will be converted to url using cloud storage provider will be stored in DB as a string
    caption: String
})

const postModel = mongoose.model("post",postSchema)//"post" = name of the collection that will be stored in DB

module.exports = postModel