import React from 'react'

export const MapDemo3 = () => {
    var students = [
  { id: 1, name: "Amit", age: 23, hobbies: ["reading", "dancing"], marks: 23, gender: "male" },
  { id: 2, name: "Priya", age: 22, hobbies: ["painting", "music"], marks: 78, gender: "female" },
  { id: 3, name: "Rahul", age: 24, hobbies: ["cricket", "gaming"], marks: 65, gender: "male" },
  { id: 4, name: "Sneha", age: 21, hobbies: ["writing", "yoga"], marks: 88, gender: "female" },
  { id: 5, name: "Karan", age: 23, hobbies: ["football", "gym"], marks: 55, gender: "male" },
  { id: 6, name: "Neha", age: 22, hobbies: ["dance", "travel"], marks: 91, gender: "female" },
  { id: 7, name: "Rohit", age: 25, hobbies: ["movies", "coding"], marks: 72, gender: "male" },
  { id: 8, name: "Pooja", age: 21, hobbies: ["singing", "reading"], marks: 84, gender: "female" },
  { id: 9, name: "Arjun", age: 24, hobbies: ["basketball", "music"], marks: 67, gender: "male" },
  { id: 10, name: "Anjali", age: 23, hobbies: ["photography", "travel"], marks: 89, gender: "female" }
];
  return (
    <div style={{textAlign:"center"}}>
        <h1>MapDemo3</h1>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>HOBBIES</th>
                    <th>MARKS</th>
                    <th>GENDER</th>
                </tr>
            </thead>
            <tbody>
                    {
                        students.map((stu)=>{
                            return<tr style={{backgroundColor:stu.gender == "female" && "pink"}}>
                                <td>{stu.id}</td>
                                <td>{stu.name}</td>
                                {/* <td style={{color:stu.age>23 ?"yellow":"white"}}>{stu.age}</td> */}
                                <td style={{color:stu.age>23 && "yellow"}}>{stu.age}</td>
                                <td>
                                {
                                    stu.hobbies.map((h)=>{
                                        return <li style={{color:h == "reading" && "yellow"}}>{h}</li>
                                    })
                                }
                                </td>
                                <td style={{backgroundColor:stu.marks>80 && "blue"}}>
                                    {stu.marks}
                                </td>
                                <td>{stu.gender}</td>
                            </tr>
                        })
                    }
            </tbody>
        </table>
    </div>
  )
}
