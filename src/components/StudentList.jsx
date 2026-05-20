import React from 'react'

export const StudentList = (props) => {

    //{sname:"",student:{}}
    //{sname:"",student:{},marks:[]}
    console.log("StudentList",props) //json object
    

  return (
    <div>
        <h1>StudentList</h1>
        {
            props.sname
        }
        <h1>id = {props.student.id}</h1>
        <h2>Name = {props.student.name}</h2>
        <h1>Marks</h1>
        {
            props.marks.map((m)=>{
                return <li>{m}</li>
            })
        }
    </div>
  )
}
