import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {

    const {register,handleSubmit,formState:{errors}}=useForm()
    
    //regiter paramobject function,  input register..
    //handle submit : submit event henalder
    const [data, setdata] = useState({})
    const [isSubbmited, setisSubbmited] = useState(false)
    console.log("error..",errors)

    const submitHandler = (data)=>{
        alert("form submmited.")
        console.log(data)
        setdata(data)
        setisSubbmited(true)
    }

    const validationSchema = {
        ageValidator:{
            required:{
                value:true,
                message:"age is required"
            },
            min:{
                value:18,
                message:"min age is 18"
            },
            max:{
                value:60,
                message:"max age is 60"
            }
        },
        genderValidator:{

        }
    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("name",{required:{value:true,message:"name is required*"}})}></input>
                
                {errors.name && errors.name.message}
            </div>
            <div>
                <label>AGE</label>
                <input type='text' {...register("age",validationSchema.ageValidator)}></input>
                {errors.age?.message}
            </div>
         
            <div>
                <input type='submit'></input>
            </div>
            {
                isSubbmited &&  <div>
            <h1>OUTPUT</h1>
            <h1>NAme = {data.name}</h1>
            </div>
            }
            

        </form>
    </div>
  )
}
