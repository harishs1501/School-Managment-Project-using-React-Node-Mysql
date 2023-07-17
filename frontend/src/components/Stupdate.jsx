import React, {useEffect, useState, useRef} from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom'
import Axios from 'axios'

function Stupdate() {
    const {id}=useParams()

    const [empList,setEmplist]=useState([])

    const nregno=useRef(null)
    const nname=useRef(null)
    const ngender=useRef(null)
    const ndob=useRef(null)
    const ncity=useRef(null)
    const nm1=useRef(null)
    const nm2=useRef(null)
    const nm3=useRef(null)
    const nm4=useRef(null)
    const nm5=useRef(null)

    const nav=useNavigate()

    useEffect(()=>{
        Axios.get("http://localhost:3000/stread/"+id).then((response)=>{
            setEmplist(response.data)
        })
    })

    const updateList=(e)=>{
        e.preventDefault()
        Axios.put("http://localhost:3000/stupdate/"+id,{
            nregno:nregno.current.value,
            nname:nname.current.value,
            ngender:ngender.current.value,
            ndob:ndob.current.value,
            ncity:ncity.current.value,
            nm1:nm1.current.value,
            nm2:nm2.current.value,
            nm3:nm3.current.value,
            nm4:nm4.current.value,
            nm5:nm5.current.value
        })
        .then((res)=>{
            alert("Updated successfully")
          nav("/stview")

        })

    }


  return (
    <div>
        <h1>Student Details</h1>
    {
        empList.map((val,key)=>{
            return(
                <div>
                <div class="container">
                <div class="d-flex justify-content-center">
                <div class="row">
                <form action="" method="POST">
                    <div class="form-group">
                        <label for="id">Student ID</label>
                        <input type="text" class="form-control" 
                        defaultValue={val.id} readOnly/>
                    </div>
                    <div class="form-group">
                        <label for="regno">Student Reg No</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            defaultValue={val.regno}
                            ref={nregno}
                        />
                    </div>
                    <div class="form-group">
                        <label for="name">Student Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            defaultValue={val.name}
                            ref={nname}
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
                        <label for="dob">Enter DOB</label>
                        <input 
                            type="text" 
                            class="form-control"  
                            defaultValue={val.dob}
                            ref={ndob}
                        />
                    </div>
                    <div class="form-group">
                        <label for="city">Enter City</label>
                        <input 
                            type="text" 
                            class="form-control"  
                            defaultValue={val.city}
                            ref={ncity}
                        />
                    </div>
                    <div class="form-group">
                        <label for="m1">Enter Tamil mark</label>
                        <input 
                            type="text" 
                            class="form-control"  
                            defaultValue={val.m1}
                            ref={nm1}
                        />
                    </div>
                    <div class="form-group">
                        <label for="m2">Enter English mark</label>
                        <input 
                            type="text" 
                            class="form-control"  
                            defaultValue={val.m2}
                            ref={nm2}
                        />
                    </div>
                    <div class="form-group">
                        <label for="m3">Enter Maths mark</label>
                        <input 
                            type="text" 
                            class="form-control"  
                            defaultValue={val.m3}
                            ref={nm3}
                        />
                    </div>
                    <div class="form-group">
                        <label for="m4">Enter Science mark</label>
                        <input 
                            type="text" 
                            class="form-control"  
                            defaultValue={val.m4}
                            ref={nm4}
                        />
                    </div>
                    <div class="form-group">
                        <label for="m5">Enter Social mark</label>
                        <input 
                            type="text" 
                            class="form-control"  
                            defaultValue={val.m5}
                            ref={nm5}
                        />
                    </div>
                    <div class="form-group">
                         <button class="btn btn-success my-3" onClick={updateList}>Update Record</button>
                    </div>
                </form>
                <div>
                    <Link to="/stview" class="btn btn-info">View Table</Link>
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
export default Stupdate