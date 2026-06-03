import React, { useState } from 'react'

export const InputDemo1 = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [age, setage] = useState("")
    const [isClicked, setisClicked] = useState(false)

    const nameHandler = (event)=>{
        console.log(event)
        setname(event.target.value)
    }
    const emailHandler = (event)=>{
        setemail(event.target.value)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>InputDemo1</h1>
        <div>
            <label>NAME</label>
            <input type='text' onChange={(event)=>{nameHandler(event)}}></input>
            {/* {name} */}
        </div>
        <div>
            <label>EMAIL</label>
            <input type='text' onChange={(event)=>{emailHandler(event)}}></input>
            {/* {email} */}
        </div>
        <div>
            <label>AGE</label>
            <input type='text' onChange={(event)=>{setage(event.target.value)}}></input>
            {/* {age} */}
        </div>
        <button onClick={()=>{setisClicked(true)}}>SUBMIT</button>
        
        {
            isClicked == true && <div>
            <h1>OUTPUT</h1>
            <h1>Name = {name}</h1>
            <h2>Age = {age}</h2>
            <h4>Email = {email}</h4>
        </div>
        }
    </div>
  )
}
