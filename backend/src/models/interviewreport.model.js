const mongoose = require("mongoose")

/**
 * - job description :string
 * - resume text : string
 * - self description: string
 * 
 * - score:{
 * 
 *   }
 * 
 * - Technical questions :[
 * question: ""
 * intention:""
 * answer: ""
 * ]
 * - Behavioral questions:[
 *  question: ""
 * intention:""
 * answer: ""
 * ]
 * - skill gaps:[ 
 *   skill: ""
 *     severity:{
 *  values: ["low","medium","High"]
 * }
 * ]
 * - preparation plan: [
 *      day-Number,
 *      focus: string,
 *      tasks: [string]
 * 
 * ]
 * 
 */

const technicalquestionschema = new mongoose.Schema({
    question:{
        type:String,
        required:[true,'technical questions is required'],
    },
    intention:{
        type:String,
        required:[true,'intention is required'],
    },
    answer:{
        type:String,
        required:[true,'answer is required']
    }
},{
    _id:false
})

const behavioralquestionschema = new mongoose.Schema({
question:{
        type:String,
        required:[true,'technical questions is required'],
    },
    intention:{
        type:String,
        required:[true,'intention is required'],
    },
    answer:{
        type:String,
        required:[true,'answer is required']
    }
},{
    _id:false
})

const skillgapschema = new mongoose.Schema({
    skill:{
        type:String,
        required:[true,'skill is needed'],
    },
    severity:{
        type:String,
        enum:['low','medium','high'],
        required:[true,'Severity is required'],
    }
},{
    _id:false
})


const preparationschema = new mongoose.Schema({
    day:{
        type:Number,
        required:[true,'day is required'],
    },
    focus:{
        type:String,
        required:[true,'focus is required '],
    },
    tasks:[{
        type:String,
        required: [true,'tasks are required']
    }]
})

const interviewreportschema = new mongoose.Schema({
    jobdescription:{
        type:String,
        required:[true,'job description is required']
    },
    resume: {
        type: String,

    },
    selfDescription:{
        type:String,
    },
    score:{
        type:Number,
        min: 0,
        max: 100
    },
    technicalquestions: [technicalquestionschema],
    behavioralquestions:[behavioralquestionschema],
    skillgaps:[skillgapschema],
    preparationplan:[preparationschema],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
},{
    timestamsps:true
})

const interviewreportmodel = mongoose.model("interviewreport",interviewreportschema)

module.exports = interviewreportmodel