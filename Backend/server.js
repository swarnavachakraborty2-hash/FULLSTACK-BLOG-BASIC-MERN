require("dotenv").config() //using this we can access env variables from child directories

const app = require('./src/index')

const connectDB = require('./src/DB/db')



app.listen(5000,()=>{
    console.log("server is running on port 5000")
})


connectDB()




