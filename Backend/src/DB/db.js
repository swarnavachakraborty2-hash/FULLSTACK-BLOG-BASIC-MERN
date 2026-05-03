const mongoose = require("mongoose")


async function connectDB() {

    try {
        await mongoose.connect(process.env.DATABASE_URL)

        console.log('server connected to database successfully')

    } catch (error) {

        console.log(error)
    }
}

module.exports = connectDB