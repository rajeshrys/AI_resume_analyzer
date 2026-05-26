import {useContext} from 'react'
import  {AuthContext}  from '../context/authcontext'
import { register,login,getme } from '../auth/authapi'
import { useNavigate } from 'react-router-dom'

const useAuth = () => {
    const {user,loading,setUser,setloading,loginuser,setloginuser} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleregister = async({username,email,password})=>{
        setloading(true)
        try {
            const data = await register({username,email,password})
            return data
        } catch (error) {
            console.log(error)
        }finally{
            setloading(false)
        }
    }

    const handlelogin= async({email,password})=>{
        setloading(true)
        try {
            const data = await login({email,password})
            setloginuser(true)
            localStorage.setItem("token",data.token)
            navigate('/userdashboard')
            return data
        } catch (error) {
            console.log(error)
        }finally{
            setloading(false)
        }
    }

    const handlegetme = async()=>{
        setloading(true)
        try{
            const data = await getme()  
            return data
        }
        catch(err){
            console.log(err)
        }
        finally{
            setloading(false)
        }
    }


    return [handleregister,handlelogin,handlegetme]
}

export default useAuth
