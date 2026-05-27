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

    const report = await interviewreportmodel.findById(resumeid)

    if(!report){
        return res.status(404).json({message:"Report not found"})
    }
    res.status(200).json({
        message:"successfully fetched report",
        report 
    })
}

async function getallinterviewcontroller(req,res){
    const userid = req.params.id
    const report = await interviewreportmodel.find({user:userid})
    if(report.length === 0){
        return res.status(404).json({message:"Report not found"})
    }
    res.status(200).json({
        message:"Successfully fetched report",
        report 
    })
}



module.exports ={generateinterviewcontroller,getinterviewcontroller,getallinterviewcontroller}