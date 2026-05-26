import React,{useState,useContext} from 'react'
import { Link } from "react-router-dom"
import logo from '../assets/logo.png'
import Navbar from '../components/Navbar';
import { AuthContext } from '../context/authcontext';

const Pricingpage = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const toggleMenu = () => {setIsMenuOpen(!isMenuOpen)};
    const [active, setactive] = useState("Resumes")
    
        const {loginuser,setloginuser} = useContext(AuthContext)
        setloginuser(true)

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
        <Navbar/>

        <div className='flex flex-row h-screen gap-12 items-center justify-center flex-wrap text-white p-6'>

  {/* Free Plan */}
  <div className='h-[450px] w-[320px] p-8 border-2 border-white hover:-translate-y-4 transition-all duration-300 rounded-3xl hover:border-blue-600 bg-[#111111] shadow-xl '>
    
    <h1 className='text-3xl font-bold mb-2'>Starter</h1>
    <p className='text-gray-400 mb-6'>Perfect for beginners</p>

    <div className='flex items-end gap-1 mb-8'>
      <span className='text-5xl font-bold'>₹99</span>
      <span className='text-gray-400 mb-1'>/month</span>
    </div>

    <ul className='space-y-4 text-gray-300'>
      <li>✔ AI Resume Analysis</li>
      <li>✔ Skill Gap Detection</li>
      <li>✔ 3 Resume Uploads</li>
      <li>✔ Basic ATS Score</li>
      <li>✔ Email Support</li>
    </ul>

    <button className='w-full mt-20 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition-all cursor-pointer hover:bg-blue-500'>
      Get Started
    </button>
  </div>


  {/* Pro Plan */}
  <div className='h-[500px] relative w-[340px] p-8 border hover:border-blue-500 hover:-translate-y-4 transition-all duration-300 rounded-3xl bg-gradient-to-b from-[#111827] to-black shadow-2xl'>

    <span className='absolute top-5 right-5 bg-blue-500 px-3 py-1 text-sm rounded-full'>
      Popular
    </span>

    <h1 className='text-3xl font-bold mb-2'>Pro AI</h1>
    <p className='text-gray-300 mb-6'>For serious job seekers</p>

    <div className='flex items-end gap-1 mb-8'>
      <span className='text-6xl font-bold'>₹399</span>
      <span className='text-gray-400 mb-1'>/month</span>
    </div>

    <ul className='space-y-4 text-gray-200'>
      <li>✔ Unlimited Resume Uploads</li>
      <li>✔ Advanced ATS Optimization</li>
      <li>✔ AI Interview Preparation</li>
      <li>✔ Personalized Roadmaps</li>
      <li>✔ Skill Improvement Suggestions</li>
      <li>✔ AI Mock Interviews</li>
      <li>✔ Priority Support</li>
    </ul>

    <button className='w-full mt-10 py-3 rounded-2xl text-black bg-white hover:bg-blue-500 font-semibold cursor-pointer hover:scale-105 transition-all'>
      Upgrade Now
    </button>
  </div>


  {/* Enterprise Plan */}
  <div className='h-[450px] w-[320px] p-8 border-2 border-gray-700 hover:-translate-y-4 transition-all duration-300 rounded-3xl hover:border-blue-500 bg-[#111111] shadow-xl'>

    <h1 className='text-3xl font-bold mb-2'>Enterprise</h1>
    <p className='text-gray-400 mb-6'>For teams & institutes</p>

    <div className='flex items-end gap-1 mb-8'>
      <span className='text-5xl font-bold'>₹999</span>
      <span className='text-gray-400 mb-1'>/month</span>
    </div>

    <ul className='space-y-4 text-gray-300'>
      <li>✔ Team Dashboard</li>
      <li>✔ Bulk Resume Analysis</li>
      <li>✔ Student Performance Insights</li>
      <li>✔ Dedicated AI Mentor</li>
      <li>✔ Premium Analytics</li>
      <li>✔ 24/7 Support</li>
    </ul>

    <button className='w-full mt-10 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition-all cursor-pointer hover:bg-blue-500'>
      Contact Us
    </button>
  </div>

    </div>
</section>
    </>
  )
}

export default Pricingpage

