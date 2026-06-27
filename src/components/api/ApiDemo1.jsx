import axios from 'axios'
import React from 'react'

export const ApiDemo1 = () => {

    const getUsers = async()=>{

        //Promise<AxiosResponse<any, any, {}>>
        const res = await axios.get("https://node5.onrender.com/user/user/")
        console.log(res) //axios object print..
        console.log(res.data) //api response
        console.log(res.data.message)
        console.log(res.data.data)

    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>ApiDemo1</h1>
        <button onClick={getUsers}>GET</button>
    </div>
  )
}
