const pdfparse = require("pdf-parse")
const generateinterviewreport = require("../services/ai.service")
const interviewreportmodel =require("../models/interviewreport.model")
const { Behavior } = require("@google/genai")

async function generateinterviewcontroller(req,res){
    const resumeFile = req.file
    if(!resumeFile){
       return res.status(400).json({message:"resume file is missing"})
    }

    const resumeContent = await (new pdfparse.PDFParse(Uint8Array.from(req.file.buffer))).getText()
    const{selfdescription,jobdescription} = req.body

    const interviewreportbyai = await generateinterviewreport({
        resume: resumeContent.text,
        selfdescription,
        jobdescription
    })

    const interviewreport =await interviewreportmodel.create({
        user:req.user._id,
        resume: resumeContent.text,
        selfDescription: selfdescription,
        jobdescription: jobdescription,
        ...interviewreportbyai
    })
    res.status(201).json({
        message: 'interview report generated successfully',
        interviewreport
    })

}

module.exports ={generateinterviewcontroller}