import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

export const FormDemo6 = () => {
    const{register,handleSubmit,control,trigger,formState:{errors}}= useForm({defaultValues:{"medicine":[{name:"",dosage:0,freq:0}]}})

    const {fields,append,remove} = useFieldArray({name:"medicine",control})
    //fileds:array --> {defaultValues:{"medicine":[{name:"",dosage:0,freq:0}]}}
    //fileds:array [{name:"",dosage:0,freq:0}]
    const submitHandler =(data)=>{
        console.log(data)
    }

  return (
    <div style={{textAlign:"center"}}>
            <h1>FORM DEMO 6</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                
                    {
                        fields.map((elm,index)=>{
                            return <div>
                                
                                    <label>NAME</label>
                                    <input type='text' {...register(`medicine.${index}.name`,{required:{value:true,message:"name is required"}})}></input>
                                    {errors.medicine?.[index]?.name?.message}
                                
                                
                                    <label>DOSAGE</label>
                                    <input type='text' {...register(`medicine.${index}.dosage`)}></input>
                                
                                
                                    <label>FREQ</label>
                                    <input type='text' {...register(`medicine.${index}.freq`)}></input>
                                
                            </div>
                        })
                    }
                <div>
                    <input type='submit'></input>
                    </div>    
            </form>
            
            <button
            type="button"
        onClick={async () => {
            const valid = await trigger("medicine");

            if(valid){
                append({name:"",dosage:0,freq:0});
        }
    }}
>
    ADD MORE
</button>

    </div>
  )
}
