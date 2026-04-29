import React from 'react'

export const Content = () => {

      var name = "Royal"
      var year = 2026
      var isActive = true
      var user = {
        id:1,name:"amit",age:23
      }
      
      
  return (
    <div>
          
      <h1>HELLO</h1>
      <h2>At a time we can return only 1 element</h2>
      <h2>Every tag must have closing tag</h2>
      {name}
      <h1>Name = {name}</h1>
      <h2>Year = {year}</h2>
      <h3>Active ? {isActive == true ? "Active" :" Not Ative"}</h3>
      <h2>id {user.id}</h2>
      <h2>Name = {user.name}</h2>
      <h3>Age = {user.age}</h3>
    </div>
  )
}
