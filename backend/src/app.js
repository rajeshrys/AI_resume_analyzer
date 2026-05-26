const express = require("express")
const app = express()
const authRouter = require("./routes/auth.routes")
const cookiepareser = require("cookie-parser")
const cors = require("cors")
const interviewrouter = require("./routes/interveiw.route")

// Middlewares
app.use(express.json())
app.use(cookiepareser())
app.use(cors({
    origin:'https://ai-resume-analyzer-eta-navy.vercel.app',
    credentials:true
}))

// Routes
app.use("/api/auth",authRouter)
app.use("/api/interview",interviewrouter)


module.exports = app
