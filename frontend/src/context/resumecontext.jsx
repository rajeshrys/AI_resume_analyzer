import { createContext,useState,useEffect } from "react"

export const ResumeContext = createContext()

const Resumeprovider =({children} )=>{
    const [resumeloading, setResumeloading] = useState(true)
    const [technical, settechnical] = useState()
    const [behavioral, setbehavioral] = useState()
    const [skillgaps, setskillgaps] = useState()
    const [preparation, setpreparation] = useState()
    const [score, setscore] = useState()
    const [resumeid, setresumeid] = useState()

   return (
     <ResumeContext.Provider value={{resumeloading,setResumeloading,technical,settechnical,behavioral,setbehavioral,skillgaps,setskillgaps,preparation,setpreparation,score,setscore,resumeid,setresumeid}}>
        {children}
     </ResumeContext.Provider>
   )
}

export default Resumeprovider