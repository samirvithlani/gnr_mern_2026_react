import React from 'react'
import { StudentList } from './StudentList'

export const Students = () => {

    var sname = "AMIT"
    var studentObj = {
        id:1,
        name:"jay",
        age:23
    }
    var marks = [45,44,32,50,30]

  return (
    <div style={{textAlign:"center"}}>
        <h1>Students</h1>
        <StudentList sname ={sname} student = {studentObj} marks={marks}></StudentList>
    </div>
  )
}
