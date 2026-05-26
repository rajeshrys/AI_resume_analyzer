const usermodel= require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const blacklistmodel = require("../models/blacklist.model")


// Registers the user
async function register(req,res){
    try{
        const {username,email,password} = req.body
    if(!username|| !email || !password){
        return res.status(400).json({
            message: "please provide username,email,password"
        })
    }
    const isexists = await usermodel.findOne({email})
    if(isexists){
        return res.status(409).json({message:"User already exists"})
    }
    
    const hashpassword = await bcrypt.hash(password,10)
    const user = await usermodel.create({
        username: username,
        email: email,
        password: hashpassword
    })
    const token = jwt.sign({ _id:user._id,username:username },process.env.JWT_SECRET,{
        expiresIn:'7d'
    })
    res.cookie('token',token)
    res.status(201).json({
        message:"User registration Successful",
        token
    })
    }
    catch(err){
        console.log(err)
    }
}

// Login the user
async function login(req,res){
    const {email,password } = req.body

    if(!email|| !password){
        return res.status(400).json({message:"Email and password are missing"})
    }

    const user  = await usermodel.findOne({email})
    const decoded = await bcrypt.compare(password,user.password)
    if(!decoded){
        return res.status(401).json({message:"Invalid credentials"})
    }
    const token = jwt.sign(
    { _id:user.id },
    process.env.JWT_SECRET,
    { expiresIn:'7d' }
)

res.cookie('token', token,{
    httpOnly: true,
    secure: false,
    sameSite: "lax"
})
console.log("passed me")

res.status(200).json({
    message:"User Login Successful",
    token
})
    
}

// Logouts the user
async function logout(req,res){
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1] || req.headers.token
    if(!token){
        return res.status(404).json({
            message:"Token is missing"
        })
    }
    await blacklistmodel.create({
        token 
    })
    res.clearCookie('token')
    res.status(200).json({
        message:"User logged out Successfully"
    })
}

async function getme(req,res){
    const user  = await usermodel.findById(req.user._id)
    res.status(200).json({
        user,
        message:"user fetched successfully"
    })

}



module.exports={
    register,
    login,
    logout,
    getme
}