import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import {Trash3Fill,Pencil,DatabaseFillDown} from 'react-bootstrap-icons'
import { FaHome } from 'react-icons/fa'
function Sfview(){
    const [empList,setEmplist]=useState([])
    const viewEmptable=()=>{
        Axios.get("http://localhost:3000/stview").then((response)=>{
            setEmplist(response.data)
        })
    }

    const delSt=(id)=>{
        Axios.delete("http://localhost:3000/deleteSt/"+id).then(
            res=>{
                window.location.reload()
                console.send("Deleted Successfully")
            }
        ).catch(err=>console.log("Error"))
    }

    return(
        <div>
            <h1>STUDENTS LIST</h1>
            <button class="btn btn-primary" onClick={viewEmptable}>Student View</button>
            <div className="d-flex justify-content-end">
             <Link to="/home" class="btn btn-info"><FaHome></FaHome>&nbsp;Home</Link>
           </div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Reg No</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>DOB</th>
                        <th>City</th>
                        <th>Tamil</th>
                        <th>English</th>
                        <th>Maths</th>
                        <th>Science</th>
                        <th>Social</th>
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
                                    <td>{val.regno}</td>
                                    <td>{val.name}</td>
                                    <td>{val.gender}</td>
                                    <td>{val.dob}</td>
                                    <td>{val.city}</td>
                                    <td>{val.m1}</td>
                                    <td>{val.m2}</td>
                                    <td>{val.m3}</td>
                                    <td>{val.m4}</td>
                                    <td>{val.m5}</td>
                                    <td><Link to={`/stupdate/${val.id}`} className="btn btn-primary"><Pencil></Pencil>&nbsp; Update</Link></td>
                                    <td><button onClick={()=>delSt(val.id)} className="btn btn-danger"><Trash3Fill></Trash3Fill>&nbsp;Delete</button></td>
                                    <td><Link to={`/stread/${val.id}`} className="btn btn-dark"><DatabaseFillDown></DatabaseFillDown>&nbsp;Fetch</Link></td>
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