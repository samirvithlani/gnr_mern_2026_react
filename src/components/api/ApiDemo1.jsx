import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Loader } from '../Loader'
import { toast } from 'react-toastify'
import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const ApiDemo1 = () => {

    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])
    const [loading, setloading] = useState(false)
    const [show, setshow] = useState(false)
    const [singleUser, setsingleUser] = useState({})

    const getUsers = async()=>{

        setloading(true)
        //Promise<AxiosResponse<any, any, {}>>
        const res = await axios.get("https://node5.onrender.com/user/user/")
        console.log(res) //axios object print..
        console.log(res.data) //api response
        console.log(res.data.message)
        console.log(res.data.data)
        setmessage(res.data.message)
        setusers(res.data.data) //[{},{},{},{},{}]
        setloading(false)
    }
    const deleteUser = async(id)=>{
        //delete api..
        const res = await axios.delete(`https://node5.onrender.com/user/user/${id}`)
        console.log(res) //axios object
        if(res.status==204){
            //alert("user deleted !!")
            toast.success("user deleted !!")
            getUsers()
        }
    }
    const userDetail =async(id)=>{
        const res = await axios.get(`https://node5.onrender.com/user/user/${id}`)
        console.log("res of single user",res.data)
        setsingleUser(res.data.data)
        setshow(true)
    }

    const handleClose =()=>{
        setshow(false)
    }

    useEffect(()=>{
        getUsers()
    },[])


  return (
    <div style={{textAlign:"center"}}>
        <h1>ApiDemo1</h1>
        {/* <button onClick={getUsers}>GET</button> */}
        {message}
        {
            loading && <Loader/>
        }
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>AGE</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((u)=>{
                        return <tr>
                            <td>{u._id}</td>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>{u.age}</td>
                            <td>
                                <button onClick={()=>{deleteUser(u._id)}} className='btn btn-danger'>DELETE</button>
                                <button onClick={()=>{userDetail(u._id)}} className='btn btn-primary'>DETAIL</button>
                                <Link state={u} to={`/updateuser2/${u._id}`} className='btn btn-warning'>UPDATE</Link>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        <Modal show={show} onHide={handleClose}>
               <Modal.Body>USER DETAIL
                <h1>NAME = {singleUser.name}</h1>
                <h2>EMAIL = {singleUser.email}</h2>
                <h3>AGE = {singleUser.age}</h3>
                </Modal.Body>     
        </Modal>
    </div>
  )
}
