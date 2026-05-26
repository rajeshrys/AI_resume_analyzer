import { useContext } from "react";
import  {ResumeContext}  from '../context/resumecontext'
import { handleresumefile,getresumefile } from "../auth/resumeapi";

const useResume = ()=>{
    const {resumeloading,setResumeloading,resumeid,setresumeid} = useContext(ResumeContext)

    // uploading resume, selefdescription and jobdescription
   const resumeupload = async(data)=>{
    try {
        const response = await handleresumefile(data)
        console.log("response",response.interviewreport._id)
        setresumeid(response.interviewreport._id)
        localStorage.setItem("resumeid",response.interviewreport._id)
    } catch (error) {
        console.log(error.message)
    }
   }

   const resumerecord = async(userId)=>{
    try {
        const data  = await getresumefile(userId)
        return data
    } catch (error) {
        console.log(error)
    }
   }

   return [resumeupload,resumerecord]
}

export default useResume
