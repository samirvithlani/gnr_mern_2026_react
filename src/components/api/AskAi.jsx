import axios from 'axios'
import React, { useState } from 'react'

export const AskAi = () => {
    const [answer, setanswer] = useState("")
    const [prompt, setprompt] = useState("")
    const [isLoading, setisLoading] = useState(false)
    const GeminiCall = async()=>{

        setisLoading(true)
        const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=add your key"
        const res  = await axios.post(url,{
            contents:[{parts:{text:`${prompt} \n you are compiler ingore syntex mistake and give out put and explintaion of code`}}]
        })
        console.log(res.data.candidates[0]?.content?.parts[0]?.text)
        if(res.status==200){
            setanswer(res.data.candidates[0]?.content?.parts[0]?.text)
        }
        setisLoading(false)
        

    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>AskAi</h1>
        <textarea placeholder='enter your code here' type='text' onChange={(event)=>{setprompt(event.target.value)}}></textarea>
        
        <button disabled={isLoading} onClick={()=>{GeminiCall()}}>ASK</button>
        <div style={{display:"flex",minHeight:"300px",height:"auto",width:"600px",backgroundColor:"white",border:"1px solid black",textAlign:"center",alignItems:"center",justifyContent:"center"}}>
            {isLoading &&<h1>Loading... </h1> }
            
            {answer}
        </div>
    </div>
  )
}
