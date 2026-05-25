import React,{useState,useContext,useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom"
import logo from '../assets/logo.png'
import Navbar from '../components/Navbar'
import { AuthContext } from '../context/authcontext'
import { AnalysisContext } from '../context/analysiscontext'
import {motion } from 'motion/react'
import Technicalquestion from '../components/Technicalquestion'
import Behaviroalquestions from '../components/Behaviroalquestions'

const Analysispage = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const toggleMenu = () => {setIsMenuOpen(!isMenuOpen)};
    const [active, setactive] = useState("Analysis")
    const navigate = useNavigate()
    const { analysis, setAnalysis } =
   useContext(AnalysisContext)
    const {loginuser,setloginuser} = useContext(AuthContext)
    useEffect(() => {
   setloginuser(true)
}, [])

        const handleclick =()=>{
            navigate('/userdashboard')
        }
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
    {!analysis ? (
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
    ): (
        <div className='border flex lg:flex-row gap-3 border-white flex-wrap h-screen w-full'>
        <div  className='text-white text-xl border-2 border-red-200 w-60' >
        {analysis?.interviewreport?.technicalquestions?.map((item,index)=>{
            <div>
                <h1 className='font-bold text-lg'>
                    Question {index + 1}
                </h1>
                <p key={index} className='text-white'>{item.question}</p>
            </div>
        })}


        </div>


    <div className='text-white text-xl border-2 border-red-200 w-220' >
        <Technicalquestion/>
        <Behaviroalquestions/>
    </div>

    
    <div  className='text-white text-xl border-2 border-red-200 w-76'>
        show the roadmap and preapartion plan 
     </div>
        </div>

    )}
  </div>

</section>
    </>
  )
}

export default Analysispage

