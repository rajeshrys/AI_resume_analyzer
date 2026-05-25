import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import UserDashboard from './pages/UserDashboard'
import Loginpage from './pages/Loginpage' 
import ProtectedRoute from './ProtectedRoute'
import ResumePage from './pages/Resumepage'
import Historypage from './pages/Historypage'
import Pricingpage from './pages/Pricingpage'
import Analysispage from './pages/Analysispage'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/login' element={<Loginpage/>}/>

        <Route path='/userdashboard' element={
          <ProtectedRoute>
            <UserDashboard/>
          </ProtectedRoute>
          }/>

            <Route path='/resumes' element={
              <ProtectedRoute>
                <ResumePage/>
              </ProtectedRoute>
              }/>
            
            <Route path='/history' element={<ProtectedRoute><Historypage/></ProtectedRoute>}/>

            <Route path='/pricing' element={<ProtectedRoute><Pricingpage/></ProtectedRoute>}/>
            <Route path='/analysis' element={<ProtectedRoute><Analysispage/></ProtectedRoute>}/>
     
    </Routes>
    </>
  )
}

export default App
