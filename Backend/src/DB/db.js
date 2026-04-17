const mongoose = require("mongoose")


async function connectDB() {
    await mongoose.connect(process.env.DATABASE_URL)

    console.log('server connected to database successfully')
}

module.exports = connectDB