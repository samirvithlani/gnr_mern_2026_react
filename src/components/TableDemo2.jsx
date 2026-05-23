import React from 'react'
import { MyTable } from './MyTable'

export const TableDemo2 = () => {

     const users =[
        {id:1,firstfirstName:"amit",age:23,status:"active",lastName:"patel",salary:24000},
        {id:2,firstName:"raj",age:23,status:"active",lastName:"patel",salary:24000},
        {id:3,firstName:"ram",age:23,status:"active",lastName:"patel",salary:24000},
        {id:4,firstName:"parth",age:23,status:"active",lastName:"patel",salary:24000},
        {id:5,firstName:"krishna",age:23,status:"active",lastName:"patel",salary:24000},      
        {id:5,firstName:"krishna",age:23,status:"active",lastName:"patel",salary:24000},      
        {id:5,firstName:"krishna",age:23,status:"active",lastName:"patel",salary:24000},      
        {id:5,firstName:"krishna",age:23,status:"active",lastName:"patel",salary:24000},      
        {id:5,firstName:"krishna",age:23,status:"active",lastName:"patel",salary:24000},      
        {id:5,firstName:"krishna",age:23,status:"active",lastName:"patel",salary:24000},      
        {id:5,firstName:"krishna",age:23,status:"active",lastName:"patel",salary:24000},      
        {id:5,firstName:"krishna",age:23,status:"active",lastName:"patel",salary:24000},      
    ]
    //{id:1,firstName:"amit",age:23,status:"active"},
    var headers = Object.keys(users[0])
  return (
    <div>
        <h1>TABLE 2</h1>
        <MyTable headers = {headers} data = {users}></MyTable>
    </div>
  )
}
