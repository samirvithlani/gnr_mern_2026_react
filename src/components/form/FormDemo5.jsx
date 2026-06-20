import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo5 = () => {

    const{register,handleSubmit,formState:{errors},trigger}=useForm()
    const [step, setstep] = useState(1)

    const next = async()=>{
    //trigger --. promise -->async await
        //const valid = step==1 ? await trigger(["name","age"]) : await trigger(["email","passwprd"])
        var valid;
        if(step==1){
            valid = await trigger(["name","age"])
        }
        else if(step==2){
            valid = await trigger(["email","password"])
        }
        if(valid){
            setstep(step+1)
        }
    }


    const submitHandler =(data)=>{
            console.log(data)
    }
    const validationSchema = {
        nameValidator:{
            required:{
                value:true,
                message:"name is required*"
            }
        },
        ageValidator:{
            required:{
                value:true,
                message:"age is required*"
            }
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo5</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            {
                step==1 &&
                <div>
                    {step}
                    <div>
                        <label>NAME</label>
                        <input type='text' {...register("name",validationSchema.nameValidator)}></input>
                        {errors.name?.message}
                    </div>
                    <div>
                        <label>AGE</label>
                        <input type='text' {...register("age",validationSchema.ageValidator)}></input>
                        {errors.age?.message}
                    </div>
                    <div>
                        <button onClick={next}>next</button>
                    </div>
                </div>
            }
            {
                step==2 && <div>
                    {step}
                    <div>
                        <label>EMAIL</label>
                        <input type='text' {...register("email")}></input>
                    </div>
                    <div>
                        <label>PASSWORD</label>
                        <input type='text' {...register("password")}></input>
                    </div>
                    <div>
                        <button onClick={()=>{setstep(step-1)}}>BACK</button>
                        <input type='submit'></input>
                    </div>
                </div>
            }
        </form>
    </div>
  )
}
