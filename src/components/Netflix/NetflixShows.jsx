import React from 'react'
import { Link } from 'react-router-dom'
import { MyButton } from '../MyButton'

export const NetflixShows = () => {

  const showList = [
    {id:1,name:"Money Heist"},
    {id:2,name:"Breaking Bad"},
    {id:3,name:"Stranger Things"},
    {id:4,name:"Mirzapur"}
  ]

  const showTest = ()=>{
    alert("show test called..")
  }

  return (
    <div style={{textAlign:"center"}}>
        <h1>NetflixShows</h1>
        <MyButton funName={showTest} name="show" bgcolor="red"></MyButton>

        {
          showList.map((show)=>{
            return <li>
              <Link to={`/watch/${show.name}`}>{show.name}</Link>
            </li>
          })
        }
    </div>
  )
}
