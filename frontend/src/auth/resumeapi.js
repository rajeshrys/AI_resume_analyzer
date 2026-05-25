import React from 'react'
import api from '../lib/axios'

export const handleresumefile =async (data)=>{
    const formData = new FormData()

    formData.append("resume", data.file)

    formData.append(
        "selfdescription",
        data.selfdescription
    )

    formData.append(
        "jobdescription",
        data.jobdescription
    )

    const response = await api.post(

        '/interview/',

        formData,

        {
            headers:{
                "Content-Type":"multipart/form-data"
            }
        }
    )

    return response.data
}
