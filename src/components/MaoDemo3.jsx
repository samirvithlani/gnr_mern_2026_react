import React from 'react'

export const MaoDemo3 = () => {
     const users =[
        {id:1,name:"amit",age:23},
        {id:2,name:"ram",age:24},
        {id:3,name:"shyam",age:22},
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>Map Demo 3</h1>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((u)=>{
                        return<tr>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.age}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
