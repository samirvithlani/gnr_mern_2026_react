import React from 'react'
import { Link } from 'react-router-dom'

export const Teams = () => {
    const teamList = [
        {id:1,name:"CSK"},
        {id:2,name:"GT"},
        {id:3,name:"DC"},
        {id:4,name:"PBKS"},
        {id:5,name:"RR"},
        {id:6,name:"SRH"},
        {id:7,name:"LSG"},
        {id:8,name:"MI"},
        {id:9,name:"KKR"},
        {id:10,name:"RCB"},
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>TEAMS</h1>
        <ol>
            {
                teamList.map((t)=>{
                    return <li><Link to={`/teamdetail/${t.id}`}>{t.name}</Link></li>
                })
            }
        </ol>
    </div>
  )
}
