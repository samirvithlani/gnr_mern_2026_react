import React from 'react'

export const MyTable = (props) => {
    //{headers:[],data:[]} //[4]
  return (
    <table className='table table-dark'>
        <thead>
            <tr>
                {
                    props.headers.map((th)=>{
                        return <th>{th}</th>
                    })
                }
            </tr>
        </thead>
        <tbody>
                {
                    props.data.map((tr)=>{
                        //{id,name...},{},{},{},{}
                        //tr ==   {id:1,name:"amit",age:23,status:"active"},
                        return <tr>
                          {
                            //[id,name,age,status].map
                            Object.keys(tr).map((td)=>{
                                //return <td>{tr["age"]}</td>
                                return <td>{tr[td]}</td>
                            })
                          }
                        </tr>
                    })
                }        
        </tbody>
    </table>
  )
}
