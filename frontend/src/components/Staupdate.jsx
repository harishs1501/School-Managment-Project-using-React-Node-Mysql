import React, {useEffect, useState, useRef} from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom'
import Axios from 'axios'

function Staupdate() {
    const {id}=useParams()

    const [empList,setEmplist]=useState([])

    const nname=useRef(null)
    const nemail=useRef(null)
    const ngender=useRef(null)
    const ncategory=useRef(null)
    const nprblm=useRef(null)
    const nstatus=useRef(null)

    const nav=useNavigate()

    useEffect(()=>{
        Axios.get("http://localhost:3000/staread/"+id).then((response)=>{
            setEmplist(response.data)
        })
    })

    const updateList=(e)=>{
        e.preventDefault()
        Axios.put("http://localhost:3000/staupd/"+id,{
            nname:nname.current.value,
            nemail:nemail.current.value,
            ngender:ngender.current.value,
            ncategory:ncategory.current.value,
            nprblm:nprblm.current.value,
            nstatus:nstatus.current.value,
        })
        .then((res)=>{
            alert("Updated successfully")
          nav("/complaint")

        })

    }


  return (
    <div>
        <h1>Complaint Details</h1>
    {
        empList.map((val,key)=>{
            return(
                <div>
                <div class="container">
                <div class="d-flex justify-content-center">
                <div class="row">
                <form action="" method="POST">
                <div class="form-group">
                        <label for="id">Staff ID</label>
                        <input type="text" class="form-control" readOnly
                        defaultValue={val.id} />
                    </div>
                    <div class="form-group">
                        <label for="name">Staff Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            defaultValue={val.name}
                            ref={nname}
                        />
                    </div>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input 
                            type="email" 
                            class="form-control" 
                            defaultValue={val.email}
                            ref={nemail}
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
                        <label for="category">Enter Age</label>
                        <input 
                            type="text" 
                            class="form-control"  
                            defaultValue={val.category}
                            ref={ncategory}
                        />
                    </div>
                    <div class="form-group">
                        <label for="prblm">Enter Subject</label>
                        <input 
                            type="text" 
                            class="form-control"  
                            defaultValue={val.prblm}
                            ref={nprblm}
                        />
                    </div>
                    <div class="form-group">
                        <label for="status">Password</label>
                        <input 
                            type="text" 
                            class="form-control"  
                            defaultValue={val.status}
                            ref={nstatus}
                        />
                    </div>
                    <div class="form-group">
                         <button class="btn btn-success my-3" onClick={updateList}>Update Record</button>
                    </div>
                </form>
                <div>
                    <Link to="/complaint" class="btn btn-info">View Table</Link>
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
export default Staupdate