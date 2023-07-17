import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
import {Trash3Fill,Pencil,DatabaseFillDown} from 'react-bootstrap-icons'

function Complaint(){
    const [empList,setEmplist]=useState([])
    const viewEmptable=()=>{
        Axios.get("http://localhost:3000/complaint").then((response)=>{
            setEmplist(response.data)
        })
    }

    const deleteComp=(id)=>{
        Axios.delete("http://localhost:3000/deleteComp/"+id).then(
            res=>{
                alert("Deleted Successfully")
                window.location.reload()
            }
        ).catch(err=>console.log("Error"))
    }

    return(
        <div>
            <h1>Complaint List</h1>
            <button class="btn btn-dark" onClick={viewEmptable}>View table</button>
            <div className="d-flex justify-content-end">
             <Link to="/home" class="btn btn-warning"><FaHome></FaHome>&nbsp;Home</Link>
            </div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Category</th>
                        <th>Problem</th>
                        <th>Status</th>
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
                                    <td>{val.gender}</td>
                                    <td>{val.category}</td>
                                    <td>{val.prblm}</td>
                                    <td>{val.status}</td>
                                    <td><Link to={`/staupd/${val.id}`} className="btn btn-primary"><Pencil></Pencil>&nbsp; Update Status</Link></td>
                                    <td><button onClick={()=>deleteComp(val.id)} className="btn btn-danger"><Trash3Fill></Trash3Fill>&nbsp;Delete</button></td>
                                    <td><Link to={`/staread/${val.id}`} className="btn btn-success"><DatabaseFillDown></DatabaseFillDown>&nbsp;Fetch</Link></td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
        </div>
    )
}
export default Complaint