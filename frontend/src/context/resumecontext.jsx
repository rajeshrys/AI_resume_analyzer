import { createContext,useState,useEffect } from "react"

export const ResumeContext = createContext()

const Resumeprovider =({children} )=>{
    const [resumeloading, setResumeloading] = useState(true)

   return (
     <ResumeContext.Provider value={resumeloading,setResumeloading}>
        {children}
     </ResumeContext.Provider>
   )
}

export default Resumeprovider