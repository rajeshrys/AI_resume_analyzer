const Groq = require("groq-sdk")
const { z } = require("zod")

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
})

const reportschema = z.object({

    score: z.number().min(0).max(100).describe(
   "Match score between candidate resume and job description from 0 to 100"
),

    technicalquestions: z.array(
        z.object({
            question: z.string().describe('why was the question asked what is interviewer expecting from us'),
            intention: z.string().describe('what is the main intention behind asking the question'),
            answer: z.string().describe("How to answer that type of question perfectly")
        })
    ).describe(
        'what all technical questions can be asked in the interview'
    ),

    behavioralquestions: z.array(
        z.object({
            question: z.string().describe('why was the question asked what is interviewer expecting from us'),
            intention: z.string().describe('what is the main intention behind asking the question'),
            answer: z.string().describe("How to answer that type of question perfectly")
        })
    ).describe('why they asked and how to tackle the questions '),

    skillgaps: z.array(
        z.object({
            skill: z.string(),
            severity: z.enum(["low", "medium", "high"])
        })
    ),

    preparationplan: z.array(
        z.object({
            day: z.number(),
            focus: z.string(),
            tasks: z.array(z.string())
        })
    ).describe("Give about a day plan first day,second day what tasks should be done ")
})

async function generateinterviewreport({
    resume,
    selfdescription,
    jobdescription
}) {

    const prompt = `
You are an AI interview preparation assistant.

Return ONLY valid JSON.

STRICT RULES:
- Do not add extra fields
- Do not rename fields
- Do not return explanations
- Do not wrap JSON in markdown
- Follow exact structure
- atleast generate a 7 days preparation plan 

Required JSON structure:

{
  "score": number (rate in the range of 100),
  "technicalquestions": [
    {
      "question": "",
      "intention": "",
      "answer": ""
    }
  ],
  "behavioralquestions": [
    {
      "question": "",
      "intention": "",
      "answer": ""
    }
  ],
  "skillgaps": [
    {
      "skill": "",
      "severity": "low | medium | high"
    }
  ],
  "preparationplan": [
    {
      "day": number,
      "focus": "",
      "tasks": [""]
    }
  ]
}

Resume:
${resume}

Self Description:
${selfdescription}

Job Description:
${jobdescription}
`

    const chatcompletion =
        await groq.chat.completions.create({

            model: "llama-3.3-70b-versatile",

            messages: [
                {
                    role: "user",
                    content: prompt
                }
            ],

            temperature: 0.3,

            response_format: {
                type: "json_object"
            }
        })

    const content =
        chatcompletion.choices[0]?.message?.content

    const parsed =
        reportschema.parse(JSON.parse(content))

    return parsed
}

module.exports = generateinterviewreport