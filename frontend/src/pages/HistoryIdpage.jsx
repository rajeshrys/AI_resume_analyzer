import React,{useState,useContext,useEffect} from 'react'
import { Link, useNavigate,useParams } from "react-router-dom"
import logo from '../assets/logo.png'
import Navbar from '../components/Navbar'
import { AuthContext } from '../context/authcontext'
import useResume from '../hooks/useResume'
import {StepForward} from 'lucide-react'
import { ResumeContext } from '../context/resumecontext'

const HistoryIdpage = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const toggleMenu = () => {setIsMenuOpen(!isMenuOpen)};
    const [,resumerecord,resumerecords] = useResume()
    const [active, setactive] = useState("Resumes")
    const navigate = useNavigate()
    const {loginuser,setloginuser,setuserId,userId} = useContext(AuthContext)
    const [records, setrecords] = useState([])
    const [technical, settechnical] = useState([])
    const [behavioral, setbehavioral] = useState([])
    const [skillgaps, setskillgaps] = useState([])
    const [preparation, setpreparation] = useState([])
    const [score,setscore] = useState([])
    const [questions, setquestions] = useState([])
    const [behavior, setbehavior] = useState([])
    const [skill, setskill] = useState([])
    const [prep, setprep] = useState([])
    const [matchscore,setmatchscore] = useState([]) 
    const { id } = useParams()

    const getrecord= async(id)=>{


        const response = await resumerecord(id)
        setquestions(response.report.technicalquestions)
        setbehavior(response.report.behavioralquestions)
        setskill(response.report.skillgaps)
        setprep(response.report.preparationplan)
        setmatchscore(response.report.score)
    }

    const section = (section)=>{
        settechnical(false)
        setbehavioral(false)
        setskillgaps(false)
        setpreparation(false)
        setscore(false)

        if (section === 'technical'){
            settechnical(true)
        }
        if (section === 'behavioral'){
            setbehavioral(true)
        }
        if (section === 'skillgaps'){
            setskillgaps(true)
        }
        if (section === 'preparation'){
            setpreparation(true)
        }
        if(section ==='matchscore'){
            setscore(true)
        }
    }

    

useEffect(()=>{
    setloginuser(true)
    getrecord(id)
},[])
  return (
    <>
        <style>
            {`
                @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
                *{
                    font-family: "Poppins", sans-serif;
                }
            `}
        </style>
        <section className='bg-gray-900 min-h-screen bg-[url("https://assets.prebuiltui.com/images/components/hero-section/hero-net-image.png")] bg-no-repeat bg-bottom bg-cover px-4 pt-5 md:px-8'>

  <Navbar />

   <div className=''>
    {id ? (
        <div className='flex lg:flex-row gap-3 border-white flex-wrap h-full w-full'>
        <div  className='text-white text-xl flex flex-col items-center border-2 border-gray-500 w-75 rounded-3xl bg-black p-5'>
            <button onClick={()=>section('technical')} className='text-xl lg:mt-1  active:scale-95 cursor-pointer w-[245px] font-semibold text-white px-3 py-3 bg-purple-600 mt-4 rounded-xl '>Technical questions</button>
            <button onClick={()=>section('behavioral')} className='text-xl active:scale-95 cursor-pointer w-[245px] font-semibold text-white px-3 py-3 bg-purple-600 mt-4 rounded-xl '>Behavioral questions</button>
            <button onClick={()=>section('skillgaps')} className='text-xl active:scale-95 cursor-pointer w-[245px] font-semibold text-white px-3 py-3 bg-purple-600 mt-4 rounded-xl '>Skill Gaps</button>
            <button onClick={()=>section('preparation')} className='text-xl active:scale-95 cursor-pointer w-[245px] font-semibold text-white px-3 py-3 bg-purple-600 mt-4 rounded-xl '>Preparation plan</button>
            <button onClick={()=>section('matchscore')} className='text-xl active:scale-95 cursor-pointer w-[245px] font-semibold text-white px-3 py-3 bg-purple-600 mt-4 rounded-xl '>MatchScore</button>
            <button onClick={()=>navigate('/history')} className='text-xl active:scale-95 cursor-pointer w-[245px] font-semibold text-white px-3 py-3 bg-red-600 mt-4 rounded-xl '>Exit</button>
        </div>


    <div className='text-white bg-black text-xl border-2 border-gray-400 rounded-3xl w-[1140px]' >
       {technical && (
        questions.map((item,index)=>{
        return (
            <div key={index} className='m-12 flex flex-col gap-2 '>
                <p className='text-white text-3xl font-bold'><span className='text-red-500 font-bold'>Question {index+1}:</span> {item.question}</p>
                <p className='text-white text-xl '><span className='text-green-600 font-bold'>Answer:</span> {item.answer}</p>
                <p className='text-white text-xl '><span className='text-green-600 font-bold'>Intention:</span> {item.intention}</p>
            </div>
        )
       })
       )}
       {behavioral && (
        behavior.map((item,index)=>{
        return (
            <div key={index} className='m-12 flex flex-col gap-2 '>
                <p className='text-white text-3xl font-bold'><span className='text-red-500 font-bold'>Question {index+1}:</span> {item.question}</p>
                <p className='text-white text-xl '><span className='text-green-600 font-bold'>Answer:</span> {item.answer}</p>
                <p className='text-white text-xl '><span className='text-green-600 font-bold'>Intention:</span> {item.intention}</p>
            </div>
        )
       })
       )}
        {skillgaps && (
            skill.map((item,index)=>{
                return(
                    <div key={index} className='m-12 flex flex-col gap-2'>
                        
                        <p className='text-white text-3xl font-bold'>
                            <span className='text-red-500'>Skill:</span> {item.skill}
                        </p>

                        <p className='text-white text-xl'>
                            <span className='text-green-600 font-bold'>
                                Severity:
                            </span> {item.severity}
                        </p>

                    </div>
                )
            })
        )}
        {preparation && (
                prep.map((item,index)=>{
                    return(
                        <div key={index} className='m-12 flex flex-col gap-3'>

                            <p className='text-white text-3xl font-bold'>
                                <span className='text-red-500'>
                                    Day {item.day}:
                                </span> {item.focus}
                            </p>

                            <div className='ml-5'>
                                {item.tasks.map((task,i)=>{
                                    return(
                                        <li key={i} className='text-white text-xl'>
                                            {task}
                                        </li>
                                    )
                                })}
                            </div>

                        </div>
                    )
                })
        )}
        {score && (
            <div className="w-full h-full flex items-center justify-center p-10">

                <div className="relative overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900 to-black rounded-3xl w-[500px] h-[320px] flex flex-col items-center justify-center shadow-2xl">

                {/* Glow Effect */}
                <div className={`absolute w-72 h-72 rounded-full blur-3xl opacity-20 
                ${matchscore >= 75 ? "bg-green-500" : "bg-red-500"}`}></div>

                {/* Small Label */}
                <p className="text-gray-400 text-lg tracking-widest uppercase z-10">
                    Resume Match Score
                </p>

                {/* Main Score */}
                <h1 className={`text-8xl font-bold z-10 mt-4 
                ${matchscore >= 75 ? "text-green-400" : "text-red-400"}`}>
                    {matchscore}%
                </h1>

                {/* Status */}
                <div className={`mt-6 px-6 py-2 rounded-full text-lg font-semibold z-10
                ${matchscore >= 75 
                    ? "bg-green-500/20 text-green-300 border border-green-500/30" 
                    : "bg-red-500/20 text-red-300 border border-red-500/30"}`}>

                    {matchscore >= 75 ? "Excellent Match" : "Needs Improvement"}

                </div>

                {/* Bottom Text */}
                <p className="text-gray-500 text-sm mt-6 z-10">
                    AI-powered resume analysis result
                </p>

                </div>

            </div>
        )}
    </div>


    </div>
    ): (
        <div className=' flex items-center justify-center h-screen w-full '>
            <motion.div
            initial={{opacity: 0 ,y: -50}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.9}}
             className='h-[500px] w-[700px] flex flex-col gap-5 items-center justify-center border-2 border-white/30 rounded-3xl mb-13 bg-black '>
                <h1 className='text-white font-bold text-4xl text-center'>No <span className='text-purple-600'>Interview</span> Reports</h1>
                <button onClick={handleclick} className='active:scale-95 px-9 py-3 rounded-3xl bg-purple-600 text-white cursor-pointer font-bold '>Generate</button>
            </motion.div>
        </div>
    )}
  </div>



</section>
    </>
  )
}

export default HistoryIdpage

