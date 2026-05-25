import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import AuthProvider from './context/authcontext.jsx'
import Resumeprovider from './context/resumecontext.jsx'

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
        <AuthProvider>
            <Resumeprovider>
                <App />
            </Resumeprovider>
        </AuthProvider>
    </BrowserRouter>
  
)
