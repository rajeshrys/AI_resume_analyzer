import {useContext} from 'react'
import  {AuthContext}  from '../context/authcontext'
import { register,login } from '../auth/authapi'

const useAuth = () => {
    const {user,loading,setUser,setloading} = useContext(AuthContext)

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
            return data
        } catch (error) {
            console.log(error)
        }finally{
            setloading(false)
        }
    }


    return [handleregister,handlelogin]
}

export default useAuth
