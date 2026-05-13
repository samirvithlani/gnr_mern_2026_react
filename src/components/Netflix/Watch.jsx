import React from 'react'
import { useParams } from 'react-router-dom'

export const Watch = () => {
    //url -->data -->fetch 
    //<Route path="/watch/:name" element = {<Watch/>}></Route>
    const movieName = useParams().name
    //<Route path="/watch/:id" element = {<Watch/>}></Route>
    //const movieId = useParams().id
  return (
    <div style={{textAlign:"center"}}>
        <h1>Watching ...{movieName}</h1>
    </div>
  )
}
