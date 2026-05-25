import React,{useState,useContext} from 'react'
import { Link, useNavigate } from "react-router-dom"
import logo from '../assets/logo.png'
import Navbar from '../components/Navbar'
import { AuthContext } from '../context/authcontext'
import { AnalysisContext } from '../context/analysiscontext'
import {motion } from 'motion/react'

const Preparationplan = () => {
    const { analysis, setAnalysis } =
   useContext(AnalysisContext)
  return (
    <div>
      {/* Preparation Plan */}
{analysis?.interviewreport?.preparationplan?.map((plan, index) => (
  <div
    key={index}
    className='border border-yellow-300 p-4 rounded-xl text-white space-y-3'
  >
    <h1 className='font-bold text-xl'>
      Day {plan.day}
    </h1>

    <p>
      <span className='font-bold'>Focus:</span>{" "}
      {plan.focus}
    </p>

    <div>
      <h2 className='font-bold mb-2'>
        Tasks:
      </h2>

      {plan.tasks?.map((task, taskIndex) => (
        <li
          key={taskIndex}
          className='ml-5 text-gray-300'
        >
          {task}
        </li>
      ))}
    </div>
  </div>
))}
    </div>
  )
}

export default Preparationplan
