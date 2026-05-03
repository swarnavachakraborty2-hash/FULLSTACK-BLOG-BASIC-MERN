const authModel = require("../models/auth.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


async function Register(req, res) {
    const { username, email, password } = req.body


    const userAlreadyExists = await authModel.findOne({
        email
    })
    if (userAlreadyExists) {
        return res.status(409).json({
            message: "email already in use"
        })
    }


    const hash = await bcrypt.hash(password, 10)

    //storing userdata in db
    const user = await authModel.create({
        username,
        password: hash,
        email
    })


    //creating token and storing it in user's browser so token will be sent with every request from the user's browser to check identy
    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET_KEY)

    res.cookie("token", token)



    res.status(201).json({
        message: "user registered successfully",
        user
    })

}

async function Login(req, res) {

    const { username, email, password } = req.body

    const user = await authModel.findOne({
        $or: [
            { username: username },
            { email: email }
        ]
    })

    if (!user) {
        return res.status(401).json({ message: "user not registered" })
    }

    const passwordVerified = await bcrypt.compare(password, user.password)

    if (!passwordVerified) {
        return res.status(401).json({ message: "invalid password" })
    }

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET_KEY)

    res.cookie("token", token)

    return res.status(200).json({
        message: "user logged in successfully",
        user
    })

}

async function Logout(req, res) {
    res.clearCookie("token")
    res.status(200).json({
        message: "logged out successfully"
    })
}


module.exports = { Register, Login, Logout}