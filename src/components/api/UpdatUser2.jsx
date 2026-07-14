import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

export const UpdateUser2 = () => {

    const id = useParams().id
    const {register,handleSubmit,formState:{errors},setValue}=useForm()
    
    const getUserById = async()=>{
        const res = await axios.get(`https://node5.onrender.com/user/user/${id}`)
        const user = res.data.data
        setValue("name",user.name) // here match name == register name
        setValue("age",user.age)
        setValue("email",user.email)

    }

    useEffect(()=>{
            getUserById()
    },[])

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
        <h1>UPDATE USER 2</h1>
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
