import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

export const UpdateUser = () => {

    const id = useParams().id

    const {register,handleSubmit,formState:{errors}}=useForm({defaultValues:async()=>{

        const res = await axios.get(`https://node5.onrender.com/user/user/${id}`)
        console.log(res.data.data)
        return res.data.data
    }})

    const submitHandler = async(data)=>{

        console.log("form submit..",data)
        try{
            delete data._id;
            const res = await axios.put(`https://node5.onrender.com/user/user/${id}`,data)
            console.log(res.data)
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>UPDATE USER</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("name")}></input>
            </div>
            <div>
                <label>EMAIl</label>
                <input type='text' {...register("email")}></input>
            </div>
            <div>
                <label>AGE</label>
                <input type='text' {...register("age")}></input>
            </div>
            <div>
                <input type='submit' value="update"></input>
            </div>
        </form>
    </div>
  )
}
