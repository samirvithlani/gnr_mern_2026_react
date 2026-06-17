import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {
    //all,onSubmit,onChange,onBlur
    const {register,handleSubmit,formState:{errors}} = useForm({mode:"all"})
    const refcodelist = ["insta","fb","google","paper"]
    const submitHandler  =(data)=>{
        alert("form subbmited..")
        console.log("data",data)
    }

    const validationSchema = {
        refCodeValidator:{
            required:{
                value:true,
                message:"ref code is required*"
            },
            //params is variable --> value input..
            validate:(params)=>{
                //console.log("params...",params)
                //return params == "insta" || "invalid ref code"
                return refcodelist.includes(params) || "invalid ref code*"
            }   
        },
        skillValidator:{
            required:{
                value:true,
                message:"skill is required*"
            }
        },
        contactValidator:{
            pattern:{
                value:/[6-9]{1}[0-9]{9}$/,
                message:"invalid phone no"
            }
        }
    }
    console.log(errors)
  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO 3</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Ref code</label>
                <input type='text' {...register("refcode",validationSchema.refCodeValidator)}></input>
                <span style={{color:"red"}}>{errors.refcode?.message}</span>
            </div>
            <div>
                <label>Skills</label> <br></br>
                React : <input type='checkbox' value="react" {...register("skills",validationSchema.skillValidator)}></input>
                node : <input type='checkbox' value="node" {...register("skills",validationSchema.skillValidator)}></input>
                js : <input type='checkbox' value="js" {...register("skills",validationSchema.skillValidator)}></input>
                python : <input type='checkbox' value="python" {...register("skills",validationSchema.skillValidator)}></input>
                <span style={{color:"red"}}>{errors.skills?.message}</span>
            </div>
            <div>
                <label>Contact</label>
                <input type='text' {...register("contact",validationSchema.contactValidator)}></input>
                {errors.contact?.message}
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
