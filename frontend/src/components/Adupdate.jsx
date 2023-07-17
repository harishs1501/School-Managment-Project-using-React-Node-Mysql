import React, {useEffect, useState, useRef} from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom'
import Axios from 'axios'

function Adupdate() {
    const {id}=useParams()

    const [empList,setEmplist]=useState([])

    const nuname=useRef(null)
    const npwd=useRef(null)
    const ngender=useRef(null)

    const nav=useNavigate()

    useEffect(()=>{
        Axios.get("http://localhost:3000/adread/"+id).then((response)=>{
            setEmplist(response.data)
        })
    })

    const updateList=(e)=>{
        e.preventDefault()
        Axios.put("http://localhost:3000/adupdate/"+id,{
            nuname:nuname.current.value,
            npwd:npwd.current.value,
            ngender:ngender.current.value,
        })
        .then((res)=>{
            alert("Updated successfully")
          nav("/adview")

        })

    }


  return (
    <div>
        <h1>Admin Details</h1>
    {
        empList.map((val,key)=>{
            return(
                <div>
                <div class="container">
                <div class="d-flex justify-content-center">
                <div class="row">
                <form action="" method="POST">
                <div class="form-group">
                        <label for="id">Admin ID</label>
                        <input type="text" class="form-control" readOnly
                        defaultValue={val.id}/>
                    </div>
                    <div class="form-group">
                        <label for="uname">Adim User Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            defaultValue={val.uname}
                            ref={nuname}
                        />
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password</label>
                        <input 
                            type="password" 
                            class="form-control"  
                            defaultValue={val.pwd}
                            ref={npwd}
                        />
                    </div>
                    <div class="form-group">
                        <label for="gender">Gender</label>
                       <select className="form-control"  ref={ngender} defaultValue={val.gender} >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                       </select>
                    </div>  
                    <div class="form-group">
                         <button class="btn btn-success my-3" onClick={updateList}>Update Record</button>
                    </div>
                </form>
                <div>
                    <Link to="/adview" class="btn btn-info">View Table</Link>
                </div>
                </div>
                </div>
    </div>
               </div>
            )
        })}
    </div>
  )
}
export default Adupdate