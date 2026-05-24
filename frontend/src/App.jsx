import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import UserDashboard from './pages/UserDashboard'
import Loginpage from './pages/Loginpage'
import Registerpage from './pages/Registerpage' 
import ProtectedRoute from './ProtectedRoute'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/login' element={<Loginpage/>}/>
      <Route path='/register' element={<Registerpage/>}/>
      
        <Route path='/userdashboard' element={
          <ProtectedRoute>
            <UserDashboard/>
          </ProtectedRoute>
          }/>
     
    </Routes>
    </>
  )
}

export default App
