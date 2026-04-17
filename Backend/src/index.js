const express = require('express')
const postModel = require('./models/post.model')
const multer = require('multer')
const uploadFile = require("./services/imagekit")
const cors = require("cors")

const app = express()

//middlewares
const upload = multer({ storage: multer.memoryStorage() })//this middleware can read files(ex: images) and store them in the memory temporarily.
app.use(express.json())//using this method(middleware) express can read text data in json format
app.use(cors())// using this, webpage of one origin(ex:port 5173) can request services from another origin(port:5000) i.e; cancels cors policy


//functions

app.post('/create-post', upload.single("image"), async (req, res) => {//needs to pass a parameter object {"image" : file,"caption": "value"}.

    console.log("req.body:", req.body)
    console.log("req.file:", req.file)//here the image file is stored on memory(RAM) through multer middleware, not stored in database yet 
    //contains metadata about the image file 

    const result = await uploadFile(req.file.buffer)//will return an object with url inside it 
    console.log("imagekit response of the uploaded image: ", result)


    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })

    return res.status(201).json({
        message: "Post created successfully",
        post
    })

})


app.get("/posts", async (req, res) => {
    const posts = await postModel.find()

    return res.status(200).json({
        message: "Posts fetched successfully",
        posts
    })
})

app.delete("/posts/:id", async (req, res) => {
    const id = req.params.id

    await postModel.findOneAndDelete({
        _id: id
    })

    return res.status(200).json({
        message: "Post deleted successfully",
    })
})

app.patch("/posts/:id", async (req, res) => {//needs to pass a paramter object with key = {"caption":"value"}.
    const id = req.params.id

    await postModel.findOneAndUpdate({
        _id: id
    }, {
        caption: req.body.caption
    })
    
    return res.status(200).json({
        message: "Post updated successfully",
    })
})


module.exports = app