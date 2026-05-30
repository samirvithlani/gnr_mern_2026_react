import React, { useState } from 'react'

export const UseStatedemo3 = () => {
    
    const [user,setUser] = useState({id:1,name:"amit",age:23,status:true})

    const changeUser = ()=>{
        //setUser({id:user.id,age:user.age,status:user.status,name:user.name.toUpperCase()})
        setUser({...user,name:user.name.toUpperCase()})
        //setuser({id:1,name:"amit"})
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStatedemo3</h1>
        <h1>Name = {user.name}</h1>
        <button onClick={changeUser}>CHANGE</button>
    </div>
  )
}
