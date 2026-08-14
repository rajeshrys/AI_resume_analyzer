AI Resume Analyzer & Interview Preparation Platform

An AI-powered full-stack web application that analyzes a candidate's resume against a target job description and generates actionable interview-preparation insights.

The platform combines resume analysis, job-description matching, skill-gap identification, interview question generation, and a personalized preparation roadmap in one workflow.

🚀 Live Demo

Frontend: https://ai-resume-analyzer-eta-navy.vercel.app/

Repository: https://github.com/rajeshrys/AI_resume_analyzer

✨ Features

Resume & Job Description Analysis

Upload a PDF resume or provide resume content.

Enter a target job description.

Compare the candidate profile with the requirements of the role.

Generate an AI-based match score from 0–100.

🎯 Skill Gap Analysis

Identifies skills that are missing or need improvement and classifies each gap by severity:

Low

Medium

High

💻 Technical Interview Questions

Generates role-specific technical questions with:

The interview question

The intention behind the question

Guidance on how to answer it

🧠 Behavioral Interview Questions

Generates behavioral questions and explains:

What the interviewer is evaluating

Why the question may be asked

How the candidate should approach the answer

📚 Personalized Preparation Plan

Creates a multi-day preparation roadmap based on the candidate's resume and target job.

Each preparation day contains:

Day number

Focus area

Recommended tasks

The AI service is instructed to generate at least a 7-day preparation plan.

🔐 Authentication

The backend includes:

User registration

Login

JWT-based authentication

HTTP-only cookie support

Logout/token blacklisting

Authenticated user retrieval

📄 PDF Resume Processing

The backend uses pdf-parse to process PDF resume content before sending the relevant information to the AI analysis service.

🗂️ Analysis UI

The frontend provides separate views for:

Generate

History

Analysis

Pricing

The analysis interface exposes technical questions, behavioral questions, skill gaps, preparation plans, and match score.

🏗️ Architecture

                    ┌──────────────────────┐
                    │      React UI        │
                    │   Vite + Tailwind    │
                    └──────────┬───────────┘
                               │
                               │ HTTP / Axios
                               ▼
                    ┌──────────────────────┐
                    │   Express Backend    │
                    │       Node.js        │
                    └──────────┬───────────┘
                               │
              ┌────────────────┼─────────────────┐
              │                │                 │
              ▼                ▼                 ▼
       Authentication      Resume Parser      AI Service
       JWT + bcrypt         pdf-parse          Groq LLM
              │                                  │
              ▼                                  ▼
          MongoDB                    Structured AI Interview Report

AI Processing Flow

Resume PDF / Resume Text
          +
   Job Description
          +
   Self Description
          │
          ▼
   Backend API
          │
          ▼
     AI Service
          │
          ▼
   Groq LLM
          │
          ▼
 Structured JSON
          │
 ┌────────┼───────────────┬─────────────────┐
 ▼        ▼               ▼                 ▼
Score   Questions     Skill Gaps      Preparation Plan

🛠️ Tech Stack

Frontend

React 19

Vite

Tailwind CSS

React Router

Axios

Lucide React

Motion

PDF.js

Inter font

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT

bcrypt

Cookie Parser

CORS

Multer

pdf-parse

Zod

AI

Groq API

llama-3.3-70b-versatile

Structured JSON output

Zod schema validation

The backend AI service validates the generated response against a Zod schema containing the match score, technical questions, behavioral questions, skill gaps, and preparation plan.

📁 Project Structure

AI_resume_analyzer/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   │
│   │   ├── controller/
│   │   │   ├── auth.controller.js
│   │   │   └── interview.controller.js
│   │   │
│   │   ├── middlewares/
│   │   │
│   │   ├── models/
│   │   │
│   │   ├── routes/
│   │   │   ├── auth.routes.js
│   │   │   └── interveiw.route.js
│   │   │
│   │   ├── services/
│   │   │   ├── ai.service.js
│   │   │   └── temp.service.js
│   │   │
│   │   └── app.js
│   │
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   └── eslint.config.js
│
├── requirements.txt
└── README.md

⚙️ Prerequisites

Make sure the following are installed:

Node.js 18+

npm

MongoDB or MongoDB Atlas

Git

A Groq API key

🔧 Installation

1. Clone the repository

git clone https://github.com/rajeshrys/AI_resume_analyzer.git
cd AI_resume_analyzer

2. Install backend dependencies

cd backend
npm install

3. Configure backend environment variables

Create a .env file inside backend/:

PORT=3000
MONGOOSE_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GROQ_API_KEY=your_groq_api_key

Do not commit the .env file or expose API keys in the repository.

4. Start the backend

npm run dev

The backend starts on:

http://localhost:3000

5. Install frontend dependencies

Open another terminal:

cd frontend
npm install

6. Start the frontend

npm run dev

The Vite development server will display the local frontend URL, normally:

http://localhost:5173

🔑 Environment Variables

Variable

Description

PORT

Port used by the Express server

MONGOOSE_URL

MongoDB connection string

JWT_SECRET

Secret used to sign JWT tokens

GROQ_API_KEY

API key used to access the Groq LLM

🔄 Application Workflow

The user opens the Resume Analyzer.

The user provides a resume, either by uploading a PDF or entering resume content.

The user enters the target job description.

The frontend sends the information to the Express backend.

The backend extracts PDF text when required.

The backend sends the resume, self-description, and job description to the AI service.

The AI service sends a structured prompt to the Groq LLM.

The model generates:

Match score

Technical interview questions

Behavioral interview questions

Skill gaps

Preparation plan

Zod validates the generated JSON structure.

The backend returns the structured analysis to the frontend.

The frontend displays the results through the Analysis interface.

🤖 AI Response Structure

The AI service produces a structured report similar to:

{
  "score": 82,
  "technicalquestions": [
    {
      "question": "What is the difference between monolithic and microservices architecture?",
      "intention": "To assess understanding of system design.",
      "answer": "Explain the architectural differences, deployment model, scalability, and trade-offs."
    }
  ],
  "behavioralquestions": [
    {
      "question": "Tell me about a challenging project you worked on.",
      "intention": "To evaluate problem-solving and communication skills.",
      "answer": "Use a structured example covering the situation, action taken, and result."
    }
  ],
  "skillgaps": [
    {
      "skill": "System Design",
      "severity": "medium"
    }
  ],
  "preparationplan": [
    {
      "day": 1,
      "focus": "Node.js and Express.js",
      "tasks": [
        "Review Node.js fundamentals",
        "Practice building a REST API"
      ]
    }
  ]
}

The exact generated content varies according to the resume and job description.

🔒 Authentication

The application implements authentication using:

Registration
    │
    ▼
Password hashing with bcrypt
    │
    ▼
User stored in MongoDB
    │
    ▼
JWT generated
    │
    ▼
Cookie / Authorization token
    │
    ▼
Protected API requests

Passwords are hashed before storage. JWTs are used for authenticated requests, and the backend also maintains a blacklist model for logout handling.

📊 What the Application Helps With

This project is designed to answer practical job-search questions such as:

How well does my resume match this job?

Which skills am I missing?

What technical questions could I be asked?

What behavioral questions should I prepare for?

Why might an interviewer ask a particular question?

How should I answer it?

What should I study over the next several days?

Instead of providing only an ATS-style score, the application connects resume analysis directly to interview preparation.

🧪 Development

Backend

cd backend
npm run dev

Frontend

cd frontend
npm run dev

Frontend build

cd frontend
npm run build

Frontend lint

cd frontend
npm run lint

🧩 Backend Design

The backend follows a layered structure:

Routes
  ↓
Controllers
  ↓
Services
  ↓
Models / External AI APIs

Routes

Define the application's HTTP endpoints.

Controllers

Handle request/response logic and coordinate application operations.

Services

Contain reusable business logic, including AI report generation.

Models

Represent MongoDB data using Mongoose.

This separation makes the backend easier to maintain and extend.

🌐 Deployment

The frontend is deployed on Vercel.

For production deployment, configure the backend environment variables in the hosting provider and update the frontend API configuration to point to the deployed backend rather than localhost.

Required production secrets include:

MONGOOSE_URL
JWT_SECRET
GROQ_API_KEY

Never expose these values in frontend code.

⚠️ Current Limitations

AI-generated scores are advisory and should not be treated as an official ATS score.

AI responses depend on the quality and completeness of the supplied resume and job description.

Groq API availability and rate limits can affect analysis generation.

The project currently focuses on resume/job matching and interview preparation rather than automatically submitting job applications.

🔮 Future Improvements

Potential extensions include:

Resume rewriting and optimization

ATS keyword recommendations

Multiple resume versions for different roles

Job recommendation based on resume similarity

Interview simulation with conversational AI

Progress tracking for preparation plans

Saved analysis history and comparison

Recruiter-facing candidate analysis

More detailed analytics dashboards

Dockerized backend deployment

Automated CI/CD pipeline

🎥 Demo

The application demonstrates the following workflow:

Generate → Analyze Resume → Match Score → Technical Questions → Behavioral Questions → Skill Gaps → Preparation Plan

The UI is designed around turning resume analysis into a concrete interview-preparation roadmap.

📌 Project Status

Status: Active development

The current repository contains separate React frontend and Node.js/Express backend applications with MongoDB persistence and Groq-powered AI analysis.

👨‍💻 Author

Rajesh

GitHub: https://github.com/rajeshrys

📄 License

This project is currently intended as a personal/portfolio project. Add an explicit open-source license if you plan to distribute or reuse the project under defined licensing terms
