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

  return (
    <div style={{textAlign:"center"}}>
        <h1>NetflixShows</h1>
        <MyButton name="show" bgcolor="red"></MyButton>

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
