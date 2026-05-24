const jwt = require("jsonwebtoken")
require("dotenv").config()
const blacklistmodel = require("../models/blacklist.model")

async function authMiddleware(req,res,next){
    const token =   req.cookies.token || req.headers.authorization?.split(' ')[1]
    if(!token){
        return res.status(401).json({message:"Token not provided"})
    }
    const validtoken = await blacklistmodel.findOne({token})
    if(validtoken){
        return res.status(401).json({message:"Invalid token"})
    }
    const  decoded = jwt.verify(token,process.env.JWT_SECRET)
    if(!decoded){
        return res.status(401).json({message:"Invalid token"})
    }
    req.user  = decoded
    next() 
}

module.exports = {authMiddleware}