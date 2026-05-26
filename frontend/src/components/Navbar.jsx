import React, { useContext, useState } from 'react'
import { motion } from "motion/react"
import logo from '../assets/logo.png'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/authcontext'

const Navbar = () => {

  const { loginuser } = useContext(AuthContext)

  const navigate = useNavigate()
  const location = useLocation()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const response = localStorage.getItem("name")
  const [dropdown, setdropdown] = useState(true)

const handleclick = () => {
  setdropdown(!dropdown)
}

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  const tabs = [
    { name: "Optimize", path: "/userdashboard" },
    { name: "History", path: "/history" },
    { name: "Analysis", path: "/analysis" },
    { name: "Pricing", path: "/pricing" },
  ]

  return (
    <motion.nav
      className='sticky top-0 z-50 border-b border-white/10 bg-gray-900/90 backdrop-blur-md'
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >

      <div className='max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between'>

        {/* LEFT SIDE */}
        <div className='flex items-center gap-10'>

          {/* LOGO */}
          <Link to="/">
            <img
              className='h-14 w-auto object-contain'
              src={logo}
              alt="logo"
            />
          </Link>

          {/* DESKTOP NAV */}
          {loginuser && (
            <div className='hidden md:flex items-center gap-8 text-sm font-medium'>

              {tabs.map((item, index) => (
                <div key={index} className='relative pb-2'>

                  <Link
                    to={item.path}
                    className={`
                      transition-all duration-300
                      ${location.pathname === item.path
                        ? "text-white"
                        : "text-white/50 hover:text-white"}
                    `}
                  >
                    {item.name}
                  </Link>

                  {location.pathname === item.path && (
                    <div className='absolute left-0 -bottom-[2px] w-full h-[2px] bg-purple-500 rounded-full'></div>
                  )}

                </div>
              ))}

            </div>
          )}

        </div>

        {/* RIGHT SIDE */}
        <div className='flex items-center gap-4'>

          {loginuser ? (

            <>
              {/* PROFILE */}
              {/* PROFILE */}
<div className='relative'>

  <div
    onClick={handleclick}
    className='size-10 rounded-full bg-white text-black font-bold flex items-center justify-center cursor-pointer'
  >
    {response?.charAt(0).toUpperCase()}
  </div>

  {/* DROPDOWN */}
  {!dropdown && (

    <div className='absolute right-0 top-14 w-60 bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden z-50 shadow-2xl'>

      <p className='text-white text-sm px-4 py-4 border-b border-gray-700'>
        {response}
      </p>

      <button
        onClick={() => {
          localStorage.clear()
          navigate("/login")
        }}
        className='w-full text-left px-4 py-3 text-red-400 hover:bg-gray-700 transition-all'
      >
        Logout
      </button>

    </div>

  )}

</div>

              {/* MOBILE BUTTON */}
              <button
                onClick={toggleMenu}
                className='md:hidden bg-white/10 p-2 rounded-lg'
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </>

          ) : (

            <>
              <p
                onClick={() => navigate("/pricing")}
                className='hidden md:block text-white/70 hover:text-white transition-all cursor-pointer'
              >
                Pricing
              </p>

              <button
                onClick={() => navigate("/login")}
                className='bg-purple-700 hover:bg-purple-600 transition-all px-6 py-3 rounded-full text-white font-medium active:scale-95'
              >
                Get Started
              </button>
            </>

          )}

        </div>

      </div>

      {/* MOBILE MENU */}
      {loginuser && (
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300
            ${isMenuOpen
              ? "max-h-[400px] opacity-100"
              : "max-h-0 opacity-0"}
          `}
        >

          <div className='mx-4 mb-4 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-6 text-white backdrop-blur-md'>

            {tabs.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`
                  transition-all
                  ${location.pathname === item.path
                    ? "text-purple-400"
                    : "text-white/60 hover:text-white"}
                `}
              >
                {item.name}
              </Link>
            ))}

          </div>

        </div>
      )}

    </motion.nav>
  )
}

export default Navbar