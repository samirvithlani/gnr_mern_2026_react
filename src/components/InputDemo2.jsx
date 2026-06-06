import React, { useState } from 'react'

export const InputDemo2 = () => {
    const [gender, setgender] = useState("")
    const [hobbies, sethobbies] = useState("")
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
            Travel<input type='checkbox' name="hobbies" value='travel' onChange={(event)=>{sethobbies(event.target.value)}}></input>
            Dacne<input type='checkbox' name="hobbies" value='dance' onChange={(event)=>{sethobbies(event.target.value)}}></input>
            Sing<input type='checkbox' name="hobbies" value='sing' onChange={(event)=>{sethobbies(event.target.value)}}></input>
            Scrolling<input type='checkbox' name="hobbies" value='scroll' onChange={(event)=>{sethobbies(event.target.value)}}></input>
            <br></br>
            {hobbies}
        </div>

    </div>
  )
}
