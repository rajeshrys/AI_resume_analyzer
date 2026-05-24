const app = require("./src/app")
require("dotenv").config()
const connect = require("./src/config/db")


connect()


app.listen(process.env.PORT,()=>{
    console.log("Server running at localhost:3000")
})