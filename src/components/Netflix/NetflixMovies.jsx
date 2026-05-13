import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixMovies = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>NetflixMovies</h1>
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
