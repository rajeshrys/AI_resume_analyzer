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

async function getinterviewcontroller(req,res){
    const resumeid = req.params.id
    console.log(resumeid)
    const report = await interviewreportmodel.findById(resumeid)
    console.log(report)
    if(!report){
        return res.status(404).json({message:"Report not found"})
    }
    res.status(200).json({
        message:"successfully fetched report",
        report 
    })
}

module.exports ={generateinterviewcontroller,getinterviewcontroller}