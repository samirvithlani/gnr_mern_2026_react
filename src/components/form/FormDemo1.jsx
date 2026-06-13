import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {

    const {register,handleSubmit}=useForm()
    //regiter paramobject function,  input register..
    //handle submit : submit event henalder
    const [data, setdata] = useState({})
    const [isSubbmited, setisSubbmited] = useState(false)

    const submitHandler = (data)=>{
        console.log(data)
        setdata(data)
        setisSubbmited(true)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("name")}></input>
            </div>
            <div>
                <label>AGE</label>
                <input type='text' {...register("age")}></input>
            </div>
            <div>GENDER<br></br>
                MALE :<input type='radio' {...register("gender")} value="male"></input>
                FEMALE :<input type='radio' {...register("gender")} value="female"></input>
            </div> 
            <div>
                <label>Hobbies</label><br></br>
                Cricket : <input type='checkbox' {...register("hobbies")} value="cricket"></input>
                Garba : <input type='checkbox' {...register("hobbies")} value="garba"></input>
                Dance : <input type='checkbox' {...register("hobbies")} value="dance"></input>
                Scrolling : <input type='checkbox' {...register("hobbies")} value="scroll"></input>
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
