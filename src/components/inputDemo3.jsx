import React, { useState } from 'react'
import { isElementOfType } from 'react-dom/test-utils'

export const InputDemo3 = () => {
    const [date, setdate] = useState("")
    const [password, setpassword] = useState("")

    const isUpperCase = /[A-Z]/.test(password)
    const checkLen = password.length>=8
    const isLowerCase = /[a-z]/.test(password)
    const isNumber = /[0-9]/.test(password)
    const isspec = /[!@#$_]/.test(password)

    const getDateLable = (selectedDate)=>{
        if(!selectedDate)
            return "select date first"
        //today
        const today = new Date()
        const input = new Date(selectedDate)
        today.setHours(0,0,0,0)
        input.setHours(0,0,0,0)

        const diffDays = Math.round(input-today)/(1000*60*60*24)
        console.log(diffDays)
        if(diffDays==0){
            return "today"
        }
        else if(diffDays == 1){
            return "tomorrow"
        }
        else if(diffDays == -1){
            return "yesterday"
        }
        else if(diffDays>=2){
            return `after ${diffDays} days`
        }
        else{
            return `before ${Math.abs(diffDays)} days`
        }

    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>inputDemo3</h1>
        <div>
            <input type='date' onChange={(e)=>{setdate(e.target.value)}}></input>
        </div>
        
        {
            getDateLable(date)
        }
        <div>
            <input type='text' onChange={(e)=>{setpassword(e.target.value)}}></input>
        </div>
        <p style={{color:isUpperCase?"green":"red"}}>min 1 cap</p>
        <p style={{color:isLowerCase?"green":"red"}}>min 1 small</p>
        <p style={{color:isNumber?"green":"red"}}>min 1 digit</p>
        <p style={{color:checkLen?"green":"red"}}>length</p>
        <p style={{color:isspec?"green":"red"}}>speccial char</p>
    </div>
  )
}

