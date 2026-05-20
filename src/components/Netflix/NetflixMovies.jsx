import React from 'react'
import { Link } from 'react-router-dom'
import { MyButton } from '../MyButton'

export const NetflixMovies = () => {

  const testMovies  =(name)=>{
    alert("Name = "+name)
  }
  return (
    <div style={{textAlign:"center"}}>
        <h1>NetflixMovies</h1>
        <MyButton funName ={()=>{testMovies("aaaaaa")}}></MyButton>
        <ul>
          <li>
            <Link to="/watch/dhurandhar">Dhurandhar</Link>
          </li>
          <li>
            <Link to="/watch/fnf">FnF</Link>
          </li>
          <li>
            <Link to="/watch/KashmirFiles">Kashmir Files</Link>
          </li>
        </ul>
    </div>
  )
}
