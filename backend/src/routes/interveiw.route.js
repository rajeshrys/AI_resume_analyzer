const express = require("express")
const interviewrouter = express.Router()
const authmiddleware = require("../middlewares/auth.middleware")
const interviewcontroller = require("../controller/interview.controller")
const upload = require("../middlewares/file.middleware")

/**
 * @route - POST - api/interview
 * @description - generate new interviewreport on the basis of user self        description resume pdf and jobdescription
 * @access private
 */
interviewrouter.post("/",authmiddleware.authMiddleware,upload.single('resume'),interviewcontroller.generateinterviewcontroller)


module.exports = interviewrouter