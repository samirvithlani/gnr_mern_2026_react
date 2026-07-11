import axios from 'axios'
import React from 'react'

export const ApiDemo5 = () => {
    const addUser = async()=>{

        const user ={
            name:"prachi",
            email:"prachi@gmail.com",
            password:"prachi123",
            age:23,
            isActive:true
        }
        const res = await axios.post(`https://node5.onrender.com/user/user/`,user)
        console.log(res.data) //api response.
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>ApiDemo5</h1>
        <button onClick={addUser}>ADD USER</button>
    </div>
  )
}

