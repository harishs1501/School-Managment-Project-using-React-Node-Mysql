import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import {Trash3Fill,Pencil,DatabaseFillDown} from 'react-bootstrap-icons'
import {FaHome} from 'react-icons/fa'

function Sfview(){
    const [empList,setEmplist]=useState([])
    const viewEmptable=()=>{
        Axios.get("http://localhost:3000/sfview").then((response)=>{
            setEmplist(response.data)
        })
    }

    const delSf=(id)=>{
        Axios.delete("http://localhost:3000/deleteSf/"+id).then(
            res=>{
                window.location.reload()
            }
        ).catch(err=>console.log("Error"))
    }

    return(
        <div>
            <h1>STAFF LIST</h1>
            <button class="btn btn-primary" onClick={viewEmptable}>Staff View</button>
            <div className="d-flex justify-content-end">
              <Link to="/home" class="btn btn-warning"><FaHome></FaHome>&nbsp;Home</Link>
            </div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Gender</th>
                        <th>Subject</th>
                        <th>Age</th>
                        <th>Action</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    empList.map((val,key)=>{
                        return(
                            <tbody>
                                <tr>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.email}</td>
                                    <td>{val.pwd}</td>
                                    <td>{val.gender}</td>
                                    <td>{val.age}</td>
                                    <td>{val.subject}</td>
                                    <td><Link to={`/sfupdate/${val.id}`} className="btn btn-primary"><Pencil></Pencil>&nbsp; Update</Link></td>
                                    <td><button onClick={()=>delSf(val.id)} className="btn btn-danger"><Trash3Fill></Trash3Fill>&nbsp;Delete</button></td>
                                    <td><Link to={`/sfread/${val.id}`} className="btn btn-dark"><DatabaseFillDown></DatabaseFillDown>&nbsp;Fetch</Link></td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
        </div>
    )
}
export default Sfview