import { createContext, useState, useEffect } from "react"

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState('')
    const [loading, setloading] = useState(true)
    const [loginuser, setloginuser] = useState(false)

    useEffect(() => {

        const loadUser = async () => {

            try {

                const token = localStorage.getItem("token")

                if (token) {
                    setUser({
                        token
                    })
                    
                }
                

            } catch (error) {
                console.log(error)
            }

            finally {
                setloading(false)
            }
        }

        loadUser()

    }, [])

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                loading,
                setloading,loginuser,setloginuser,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider