import React, { useState } from 'react'

export const InputDemo2 = () => {
    const [gender, setgender] = useState("")
    const [hobbies, sethobbies] = useState([])
    const hobbyHanlder =(event)=>{
        
        
        console.log("event...",event)
        if(event.target.checked){
            sethobbies([...hobbies,event.target.value])
        }
        else{
            //["a",b]==> a!=a b!=b -->false
            sethobbies(hobbies.filter((h)=>h!=event.target.value))
        }

    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>InputDemo2</h1>
        <div>
            <label>Gender</label> <br></br>
            Male :<input type='radio' name='gender' value="male" onChange={(event)=>{setgender(event.target.value)}}></input>
            FeMale :<input type='radio' name='gender' value="female" onChange={(event)=>{setgender(event.target.value)}}></input>            
            <br></br>
            {gender}
        </div>
        <div>
            <label>Hobbies :</label>
            Travel<input type='checkbox' name="hobbies" value='travel' onChange={(event)=>{hobbyHanlder(event)}}></input>
            Dacne<input type='checkbox' name="hobbies" value='dance' onChange={(event)=>{hobbyHanlder(event)}}></input>
            Sing<input type='checkbox' name="hobbies" value='sing' onChange={(event)=>{hobbyHanlder(event)}}></input>
            Scrolling<input type='checkbox' name="hobbies" value='scroll' onChange={(event)=>{hobbyHanlder(event)}}></input>
            <br></br>
            {
                hobbies.map((h)=>{
                    return <li>{h}</li>
                })
            }
        </div>

    </div>
  )
}
