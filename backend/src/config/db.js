const mongoose = require("mongoose")
require("dotenv").config()
const dns = require("node:dns")
dns.setServers(["1.1.1.1","8.8.8.8"])

async function conntectdb(){
    try {
        await mongoose.connect(process.env.MONGOOSE_URL)
        console.log("Connected to databse")
    } catch (error) {
        console.log("Error",error)
    }
}

module.exports = conntectdb