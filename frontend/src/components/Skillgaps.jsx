import React,{useState,useContext} from 'react'
import { Link, useNavigate } from "react-router-dom"
import logo from '../assets/logo.png'
import Navbar from '../components/Navbar'
import { AuthContext } from '../context/authcontext'
import { AnalysisContext } from '../context/analysiscontext'
import {motion } from 'motion/react'

const Skillgaps = () => {
    const { analysis, setAnalysis } =
   useContext(AnalysisContext)
  return (
    <div>
      {/* Skill Gaps */}
{analysis?.interviewreport?.skillgaps?.map((skill, index) => (
  <div
    key={index}
    className='border border-red-300 p-4 rounded-xl text-white space-y-2'
  >
    <h1 className='font-bold text-lg'>
      Skill Gap {index + 1}
    </h1>

    <p>
      <span className='font-bold'>Skill:</span>{" "}
      {skill.skill}
    </p>

    <p>
      <span className='font-bold'>Severity:</span>{" "}
      {skill.severity}
    </p>
  </div>
))}
    </div>
  )
}

export default Skillgaps
