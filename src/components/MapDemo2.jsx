import React from 'react'

export const MapDemo2 = () => {
    const users =[
        {id:1,name:"amit",age:23},
        {id:2,name:"ram",age:24},
        {id:3,name:"shyam",age:22},
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>MapDemo2</h1>
        {
            users.map((u)=>{
                return <li>{u.id} {u.name} {u.age}</li>
            })
        }
    </div>
  )
}
