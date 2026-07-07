import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ApiDemo4 = () => {

    const navigate = useNavigate()
    const addUser = async()=>{
        const user = {
            name:"amit",
            age:23,
            isActive:true,
            email:"amit2@gmail.com",
            password:"amit123"
        }
        try{
            const res = await axios.post(`https://node5.onrender.com/user/user/`,user)
            console.log(res) //axios object
            console.log(res.data)
            if(res.status==200){
                alert("user added")
                navigate("/apidemo1")
            }
        }catch(err){
            console.log(err)
            alert("error while adding user")
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>ApiDemo4</h1>
        <button onClick={addUser}>ADD</button>

    </div>
  )
}
