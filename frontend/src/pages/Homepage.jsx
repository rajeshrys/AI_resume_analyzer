import React from 'react'
import Navbar from '../components/Navbar'
import { motion } from "motion/react"
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
   const navigate = useNavigate();

  return (
    <div className='relative overflow-hidden bg-gray-800 min-h-screen'>

      <Navbar />

      {/* Left Glow */}
      <div className="
      absolute
      left-[-120px]
      top-1/2
      -translate-y-1/2
      w-[300px]
      h-[300px]
      sm:w-[400px]
      sm:h-[400px]
      lg:w-[500px]
      lg:h-[500px]
      bg-cyan-400
      rounded-full
      blur-[140px]
      opacity-40
      ">
      </div>

      {/* Main Section */}
      <div className='
      relative
      mt-12
      px-6
      sm:px-8
      lg:px-12
      flex
      flex-col
      xl:flex-row
      items-center
      justify-between
      gap-20
      '>

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className='
          flex
          flex-col
          items-center
          xl:items-start
          gap-4
          w-full
          max-w-[650px]
          text-center
          xl:text-left
          '
        >

          <h1 className='
          text-3xl
          sm:text-4xl
          lg:text-5xl
          text-white
          font-semibold
          leading-tight
          '>
            AI Interview Preparation
          </h1>

          <h1 className='
          bg-gradient-to-r
          from-pink-400
          via-purple-400
          to-blue-400
          bg-clip-text
          text-transparent
          text-xl
          sm:text-2xl
          lg:text-3xl
          font-semibold
          '>
            Get Your Resume Certified by AI
          </h1>

          <h2 className='
          text-base
          sm:text-lg
          lg:text-2xl
          text-white/40
          leading-relaxed
          '>

            Practice <span className='text-white/80'>Technical</span> and{" "}
            <span className='text-white/80'>Behavioral</span> interviews with
            real-time AI feedback. Get personalized interview questions,
            ATS-ready resume tips, and instant performance analysis.

          </h2>

          {/* Buttons */}
          <div className='
          flex
          flex-col
          sm:flex-row
          gap-5
          pt-8
          sm:pt-12
          w-full
          sm:w-auto
          '>

            <button
              onClick={() => navigate("/login")}
              className='
            text-lg
            sm:text-xl
            text-white
            p-3
            bg-purple-800
            rounded-2xl
            px-6
            cursor-pointer
            hover:scale-95
            duration-300
            font-bold
            '>
              Improve Resume
            </button>

            <button
              onClick={() => navigate("/login")}
              className='
            text-lg
            sm:text-xl
            text-white/70
            font-bold
            bg-slate-800
            border-2
            border-white/40
            px-6
            py-3
            rounded-2xl
            cursor-pointer
            hover:scale-95
            duration-300
            '>
              Sample Resume
            </button>

          </div>

        </motion.div>

        {/* RIGHT CARDS */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className='
          relative
          rounded-4xl
          flex
          flex-wrap
          justify-center
          gap-8
          lg:gap-12
          w-full
          xl:w-auto
          '
        >

          {/* Glow */}
          <div className="
          absolute
          right-20
          top-1/2
          -translate-y-1/2
          w-[300px]
          h-[300px]
          sm:w-[400px]
          sm:h-[400px]
          lg:w-[500px]
          lg:h-[500px]
          bg-blue-500/50
          rounded-full
          blur-[140px]
          ">
          </div>

          {/* BEFORE CARD */}
          <div className='
          bg-black
          h-[290px]
          sm:h-[305px]
          w-[260px]
          sm:w-[280px]
          lg:w-[300px]
          rounded-3xl
          border
          border-white/10
          overflow-hidden
          '>

            {/* Header */}
            <div className='flex flex-row items-center justify-between border-b border-white/10'>

              <h1 className='
              text-white/60
              px-3
              py-3
              font-bold
              uppercase
              tracking-widest
              text-sm
              '>
                Before
              </h1>

              <div className='
              border
              bg-red-500/10
              border-red-500/30
              px-3
              py-1
              mr-5
              rounded-2xl
              '>

                <h1 className='text-red-400 text-sm font-semibold'>
                  Score:49
                </h1>

              </div>

            </div>

            {/* Content */}
            <div className='px-5 py-5'>

              <h1 className='text-white text-xl sm:text-2xl font-bold text-center'>
                Alex Johnson
              </h1>

              <p className='text-gray-500 text-xs sm:text-sm text-center mt-2'>
                alex@email.com | linkedin.com/alexj
              </p>

              {/* Experience */}
              <div className='mt-6'>

                <h2 className='
                text-white/40
                uppercase
                tracking-[3px]
                text-xs
                border-b
                border-white/10
                pb-2
                '>
                  Experience
                </h2>

                <h3 className='text-gray-200 font-semibold mt-4 text-sm sm:text-base'>
                  Software Engineer — Acme Corp
                </h3>

                <ul className='text-gray-500 text-xs sm:text-sm mt-4 space-y-2'>
                  <li>• Worked on backend systems</li>
                  <li>• Helped with database tasks</li>
                </ul>

              </div>

              {/* Skills */}
              <div className='mt-6'>

                <h2 className='
                text-white/40
                uppercase
                tracking-[3px]
                text-xs
                border-b
                border-white/10
                pb-2
                '>
                  Skills
                </h2>

                <p className='text-gray-500 text-xs sm:text-sm mt-3'>
                  Python, SQL, Git, Cloud
                </p>

              </div>

            </div>

          </div>

          {/* AFTER CARD */}
          <div className='
          bg-black
          h-[305px]
          sm:h-[325px]
          w-[260px]
          sm:w-[280px]
          lg:w-[300px]
          rounded-3xl
          border
          border-cyan-500/20
          overflow-hidden
          shadow-[0_0_60px_rgba(34,211,238,0.15)]
          '>

            {/* Header */}
            <div className='flex flex-row items-center justify-between border-b border-white/10'>

              <h1 className='
              text-cyan-300
              px-3
              py-3
              font-bold
              uppercase
              tracking-widest
              text-sm
              '>
                After
              </h1>

              <div className='
              border
              bg-emerald-500/10
              border-emerald-500/30
              px-3
              py-1
              mr-5
              rounded-2xl
              '>

                <h1 className='text-emerald-400 text-sm font-semibold'>
                  Score:91
                </h1>

              </div>

            </div>

            {/* Content */}
            <div className='px-5 py-5'>

              <h1 className='text-white text-xl sm:text-2xl font-bold text-center'>
                Alex Johnson
              </h1>

              <p className='text-gray-400 text-xs sm:text-sm text-center mt-2'>
                alex@email.com | linkedin.com/alexj
              </p>

              {/* Experience */}
              <div className='mt-6'>

                <h2 className='
                text-cyan-300
                uppercase
                tracking-[3px]
                text-xs
                border-b
                border-white/10
                pb-2
                '>
                  Experience
                </h2>

                <h3 className='text-white font-semibold mt-4 text-sm sm:text-base'>
                  Senior Backend Engineer — Acme Corp
                </h3>

                <ul className='text-gray-300 text-xs sm:text-sm mt-4 space-y-2'>
                  <li>• Built scalable REST APIs</li>
                  <li>• Optimized PostgreSQL queries</li>
                </ul>

              </div>

              {/* Skills */}
              <div className='mt-6'>

                <h2 className='
                text-cyan-300
                uppercase
                tracking-[3px]
                text-xs
                border-b
                border-white/10
                pb-2
                '>
                  Skills
                </h2>

                <p className='text-gray-300 text-xs sm:text-sm mt-3'>
                  Python, Node.js, AWS, Docker
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </div>
  )
}

export default Homepage
