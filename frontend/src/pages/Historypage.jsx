import React,{useState,useContext} from 'react'
import { Link } from "react-router-dom"
import logo from '../assets/logo.png'
import Navbar from '../components/Navbar'
import { AuthContext } from '../context/authcontext'

const Historypage = () => {
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

  <Navbar />

</section>
    </>
  )
}

export default Historypage

