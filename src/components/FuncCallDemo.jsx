import React from 'react'

export const FuncCallDemo = () => {

    const test = ()=>{
        alert("test called...")
    }
    const test2 = (no)=>{
        alert("no "+no)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Function call</h1>
        <button onClick={test}>test</button>
        {/* <button onClick={test2}>TEST 2</button> */}
        <button onClick={()=>{test2(10)}}>TEST 2</button>
    </div>
  )
}
