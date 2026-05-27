import React,{useState,useContext,useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom"
import logo from '../assets/logo.png'
import Navbar from '../components/Navbar'
import { AuthContext } from '../context/authcontext'
import useResume from '../hooks/useResume'
import {StepForward} from 'lucide-react'
import { ResumeContext } from '../context/resumecontext'

const Historypage = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const toggleMenu = () => {setIsMenuOpen(!isMenuOpen)};
    const [,resumerecord,resumerecords] = useResume()
    const [active, setactive] = useState("Resumes")
    const navigate = useNavigate()
    const {loginuser,setloginuser,setuserId,userId} = useContext(AuthContext)
    const [records, setrecords] = useState([])

    const getrecoreds = async()=>{

        const id = localStorage.getItem('userid')
        try {
            const response = await resumerecords(id)
            const copyTask = [...records]
            response.report.forEach((element,index) => {
                copyTask.push(element)
            });
            setrecords(copyTask)
        } catch (error) {
            console.log(error)
        }
    }

    

useEffect(()=>{
    setloginuser(true)
    getrecoreds()
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

 <div className='flex flex-nowrap items-center justify-center mt-12'>
     <div className='w-[800px] h-full flex flex-col gap-6 flex-nowrap '>
        {records.map((item,index)=>{
           return (
            <div key={index} className='w-full h-20 bg-black rounded-3xl  border-2 border-white/30 flex flex-row items-center justify-around '>
            <p className='m-5 lg:text-3xl text-xs-sm  font-bold text-white'>Resume : <span className='text-purple-600'>{index +1}</span></p>
             <p className='m-5 lg:text-xl text-xs-sm text-white/40 font-bold '>Score : <span className='text-green-500 '>{item.score}</span></p>
            <p className='lg:text-xl text-xs-sm text-white hover:text-purple-600 cursor-pointer active:scale-105'onClick={()=>navigate(`/history/${item._id}`)} ><StepForward /></p>
        </div>
           )
        })}
  </div>
 </div>



</section>
    </>
  )
}

export default Historypage

