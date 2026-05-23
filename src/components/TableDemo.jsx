import React from 'react'
import { MyTable } from './MyTable'

export const TableDemo = () => {
    const students =[
        {id:1,name:"amit",age:23,status:"active"},
        {id:2,name:"raj",age:23,status:"active"},
        {id:3,name:"ram",age:23,status:"active"},
        {id:4,name:"parth",age:23,status:"active"},
        {id:5,name:"krishna",age:23,status:"active"},      
    ]
    //{id:1,name:"amit",age:23,status:"active"},
    var headers = Object.keys(students[0])
    console.log(headers)
  return (
    <div style={{textAlign:"center"}}>
        <h1>TABLE DEMO</h1>
        <MyTable headers = {headers} data = {students}></MyTable>
        {/* <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>AMIT</td>
                    <td>12</td>
                </tr>
            </tbody>
        </table> */}
    </div>
  )
}
