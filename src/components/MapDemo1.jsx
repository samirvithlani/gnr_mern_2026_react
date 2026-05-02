import React from 'react'

export const MapDemo1 = () => {
    const users = ["ram","shyam","amit","sumit"]
    //for(let i=0;i<users.len;i++){
    // users[i]
    //}
  return (
    <div style={{textAlign:"center"}}>
        <h1>MapDemo1</h1>

        {
            users.map((u)=>{
                return <li>{u}</li>
            })
        }
    </div>
  )
}
