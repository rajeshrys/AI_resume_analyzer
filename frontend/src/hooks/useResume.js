import { useContext } from "react";
import  {ResumeContext}  from '../context/resumecontext'
import { handleresumefile } from "../auth/resumeapi";

const useResume = ()=>{
    const {resumeloading,setResumeloading} = useContext(ResumeContext)

    // uploading resume, selefdescription and jobdescription
   const resumeupload = async(data)=>{
    try {
        const response = await handleresumefile(data)
        console.log("response",response)
    } catch (error) {
        console.log(error.message)
    }
   }

   return [resumeupload]
}

export default useResume
