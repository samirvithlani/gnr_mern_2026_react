import React, { useEffect, useState } from 'react'

export const UseEffectDemo = () => {

    //()=>{} :cb func
    //[] ->dep array
    const [count, setcount] = useState(0)
    useEffect(()=>{
        console.log("use effect called....")
    },[count])

  return (
    <div style={{textAlign:"center"}}>
        <h1>useEffectDemo</h1>
        <button onClick={()=>{setcount(count+1)}}>+</button>
        {count}
    </div>
  )
}
