import React from 'react'
import api from '../lib/axios'

export const register = async (userData)=>{
    console.log("Userdata",userData)
    const response =await  api.post('/auth/register',userData)
    return response.data
}

export const login = async (userData)=>{
    console.log("Userdata",userData)
    const response = await api.post('/auth/login',userData)
    return response.data
}

export const getme = async()=>{
    const response = await api.get("/auth/getme")
    return response.data
}