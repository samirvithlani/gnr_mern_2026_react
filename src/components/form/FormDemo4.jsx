import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo4 = () => {

  const{register,handleSubmit,formState:{errors},watch}=useForm({mode:"onChange",defaultValues:{password:"test"}})
  const password = watch("password")
  
  const submitHandler = (data)=>{
    console.log(data)
  }
  const validationSchema = {
    passwordValidator:{
      required:{
        value:true,
        message:"password is required*"
      },
    },

      confirmPasswordValidator:{
        validate:(params)=>{
          return password==params || "both password are not same !!!"
        }
      }

  }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo4</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>PASSWORD</label>
            <input type='text' {...register("password",validationSchema.passwordValidator)}></input>
            {errors.password?.message}
          </div>
          <div>
            <label>Confirm Password</label>
            <input type='text' {...register("confirmPassword",validationSchema.confirmPasswordValidator)}></input>
            {errors.confirmPassword?.message}
          </div>
          <div>
            <input type='submit'></input>
          </div>
        </form>
    </div>
  )
}
