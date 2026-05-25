import React,{useState,useContext} from 'react'
import { Link, useNavigate } from "react-router-dom"
import logo from '../assets/logo.png'
import Navbar from '../components/Navbar'
import { AuthContext } from '../context/authcontext'
import { AnalysisContext } from '../context/analysiscontext'
import {motion } from 'motion/react'

const Technicalquestion = () => {
    const { analysis, setAnalysis } =
   useContext(AnalysisContext)
    return (
        <div>
                {/* Technical Questions */}
            {analysis?.interviewreport?.technicalquestions?.map((question, index) => (
            <div
                key={index}
                className='border border-blue-300 p-4 rounded-xl text-white space-y-2'
            >
                <h1 className='font-bold text-lg'>
                Technical Question {index + 1}
                </h1>

                <p className='font-semibold'>
                Q: {question.question}
                </p>

                <p className='text-gray-300'>
                <span className='font-bold'>Intention:</span>{" "}
                {question.intention}
                </p>

                <p className='text-green-300'>
                <span className='font-bold'>Answer:</span>{" "}
                {question.answer}
                </p>
            </div>
            ))}
        </div>
    )
}

export default Technicalquestion
