import React, { useMemo, useState } from 'react'

export const FindBomb = () => {
    
    var girdSize = 5
    var totalTiles = girdSize * girdSize

    const [clickedTiles, setclickedTiles] = useState([])
    const [isGameover, setisGameover] = useState(false)
    console.log(clickedTiles)
    const clickHandler =(index)=>{

        setclickedTiles([...clickedTiles,index])
        if(bombPos==index){
            setisGameover(true)
        }

    }
    //const bombPos = Math.floor(Math.random()*totalTiles)
    //console.log("bomb pos...",bombPos)
    const bombPos = useMemo(()=>{
        return Math.floor(Math.random()*totalTiles)
    },[])
    console.log("bomb pos...",bombPos)

  return (
    <div style={{textAlign:"center"}}>
        <h1>FindBomb</h1>
        <div style={{
            display:'grid',
            gridTemplateColumns:`repeat(${girdSize},60px)`,
            gap:"10px",
            justifyContent:"center"
        }}>
            {
                Array.from({length:totalTiles}).map((elm,index)=>{
                    return <div
                    onClick={()=>{clickHandler(index)}}
                     style={{
                        width:"60px",
                        height:"60px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        border:"1px solid black",
                        //backgroundColor:"white",
                        backgroundColor:clickedTiles.includes(index)?"grey":"white",
                        cursor:"pointer"
                    }}>
                        {isGameover&& index==bombPos?"💣":index}
                    </div>
                })
            }


        </div>
    </div>
  )
}
