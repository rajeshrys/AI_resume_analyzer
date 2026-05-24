import React from 'react'
import { motion } from "motion/react"
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div>
      <motion.div className='border-b border-white/30 bg-gray-800 flex flex-wrap justify-between'
      initial={{opacity:0 ,y:-49}}
      animate={{opacity: 1, y:0}}
      transition={{duration: 0.8}}
      >
        <img  className='h-30 w-25 object-cover' src={logo} alt="" />
        <div className='flex items-center flex-wrap gap-5'>
          <p className='text-xl text-white font-bold cursor-pointer active:scale-95 p-2'>Pricing</p>
          <button className='bg-purple-700 p-3 lg:w-[200px] text-white text-xl rounded-full active:scale-95 cursor-pointer sm:w-[100px] md:w-[170px] hover:scale-95 font-bold'>Get Started</button>
        </div>
      </motion.div>

    </div>
  )
}

export default Navbar
