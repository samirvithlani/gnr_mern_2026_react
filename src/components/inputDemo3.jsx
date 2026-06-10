import React, { useState } from 'react'

export const InputDemo3 = () => {
    const [date, setdate] = useState("")
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
    </div>
  )
}

