import React,{useState,useContext,useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom"
import logo from '../assets/logo.png'
import Navbar from '../components/Navbar';
import { AuthContext } from '../context/authcontext'
import useResume from '../hooks/useResume';
import { AnalysisContext } from '../context/analysiscontext';

const UserDashboard = () => {

  const [file, setFile] = useState(null)
  const [selfdescription, setSelfdescription] = useState('')
  const [jobdescription, setJobdescription] = useState('')
   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const toggleMenu = () => {setIsMenuOpen(!isMenuOpen)};
    const [active, setactive] = useState("Optimize")  
    const {loginuser,setloginuser} = useContext(AuthContext)
    const {analysis,setAnalysis} = useContext(AnalysisContext)
    const [resumeupload] = useResume()  
    const navigate = useNavigate()
    
    useEffect(() => {
      setloginuser(true)
    }, [])
    

     const handlesubmit = async(e)=>{
      e.preventDefault()
      const response = await resumeupload({file,selfdescription,jobdescription})
      navigate('/analysis')
      setAnalysis(response)
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

        <div className='w-full min-h-screen px-8 py-10 flex flex-col items-center'>

  {/* Heading */}
  <div className='text-center max-w-6xl'>
    <h1 className='text-5xl md:text-6xl font-semibold text-white leading-tight'>
      <span className='text-violet-500'>
        Analyze your resume.
      </span>

      {" "}Discover your gaps.{" "}

      <span className='text-orange-500'>
        Build your roadmap.
      </span>
    </h1>

    <p className='text-gray-400 mt-6 text-lg'>
      Upload your resume and compare it against job descriptions
      to generate a personalized AI preparation roadmap.
    </p>
  </div>

  {/* Main Cards */}
  <div className='flex flex-col lg:flex-row gap-8 mt-16 w-full max-w-7xl'>

    {/* Resume Card */}
    <div className='flex-1 bg-[#070b1a]/80 border border-violet-500/20 rounded-3xl p-8 backdrop-blur-xl shadow-2xl shadow-violet-500/10'>

      <div className='mb-6'>
        <h2 className='text-3xl font-semibold text-white'>
          Your Resume
        </h2>

        <p className='text-gray-400 mt-2'>
          Upload your PDF resume or paste resume content
        </p>
      </div>

      {/* Textarea */}
      <textarea value={selfdescription} onChange={(e)=>setSelfdescription(e.target.value)}
        placeholder='Paste your Self Description here...'
        className='
        w-full
        h-[250px]
        bg-[#0b1120]
        border
        border-violet-500/20
        rounded-2xl
        p-5
        text-white
        placeholder:text-gray-500
        outline-none
        focus:border-violet-500
        resize-none
        '
      />

      {/* Upload Box */}
      <div className='
      mt-8
      border
      border-dashed
      border-violet-500/30
      rounded-2xl
      h-[180px]
      flex
      flex-col
      items-center
      justify-center
      bg-white/5
      hover:bg-violet-500/10
      transition-all
      duration-300
      '>

        <input onChange={(e)=>setFile(e.target.files[0])}
          type='file'
          accept='.pdf'
          className='
          text-white
          file:mr-4
          file:px-5
          file:py-3
          file:rounded-xl
          file:border-0
          file:bg-violet-600
          file:text-white
          file:font-medium
          hover:file:bg-violet-700
          cursor-pointer
          '
        />

        <p className='text-gray-400 mt-5'>
          Drag & drop PDF or click to upload
        </p>
      </div>
    </div>

    {/* Job Description Card */}
    <div className='flex-1 bg-[#070b1a]/80 border border-violet-500/20 rounded-3xl p-8 backdrop-blur-xl shadow-2xl shadow-violet-500/10'>

      <div className='mb-6'>
        <h2 className='text-3xl font-semibold text-white'>
          Job Description
        </h2>

        <p className='text-gray-400 mt-2'>
          Paste job description to analyze skill gaps
        </p>
      </div>

      <textarea value={jobdescription} onChange={(e)=>setJobdescription(e.target.value)}
        placeholder='Paste the job description here...'
        className='
        w-full
        h-[450px]
        bg-[#0b1120]
        border
        border-violet-500/20
        rounded-2xl
        p-5
        text-white
        placeholder:text-gray-500
        outline-none
        focus:border-violet-500
        resize-none
        '
      />
    </div>
  </div>

  <button onClick={handlesubmit} className='p-3 mt-4 rounded-xl text-white font bold bg-purple-700 w-[150px] active:scale-95 cursor-pointer'>Submit</button>
  </div>

              
</section>
    </>
  )
}

export default UserDashboard


