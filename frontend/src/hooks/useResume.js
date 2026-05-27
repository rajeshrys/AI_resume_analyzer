import { useContext } from "react";
import  {ResumeContext}  from '../context/resumecontext'
import { handleresumefile,getresumefile,getresumefiles } from "../auth/resumeapi";

const useResume = ()=>{
    const {resumeloading,userid,setuserid,setResumeloading,resumeid,setresumeid} = useContext(ResumeContext)

    // uploading resume, selefdescription and jobdescription
   const resumeupload = async(data)=>{
    try {
        const response = await handleresumefile(data)
        console.log("response",response.interviewreport._id)
        setresumeid(response.interviewreport._id)
        setuserid(response.interviewreport.user)
        localStorage.setItem("resumeid",response.interviewreport._id)
        localStorage.setItem("userid",response.interviewreport.user)
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

   const resumerecords = async(userId)=>{
    try {
        const data  = await getresumefiles(userId)
        return data
    } catch (error) {
        console.log(error)
    }
   }


   return [resumeupload,resumerecord,resumerecords]
}

export default useResume
