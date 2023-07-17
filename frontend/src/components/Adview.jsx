import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
import {Trash3Fill,Pencil,DatabaseFillDown} from 'react-bootstrap-icons'

function Adview(){
    const [empList,setEmplist]=useState([])
    const viewEmptable=()=>{
        Axios.get("http://localhost:3000/adview").then((response)=>{
            setEmplist(response.data)
        })
    }

    const delAd=(id)=>{
        Axios.delete("http://localhost:3000/deleteAd/"+id).then(
            res=>{
                window.location.reload()
            }
        ).catch(err=>console.log("Error"))
    }

    return(
        <div>
            <h1>ADMIN LIST</h1>
            <button class="btn btn-dark" onClick={viewEmptable}>View table</button>
            <div className="d-flex justify-content-end">
             <Link to="/home" class="btn btn-warning"><FaHome></FaHome>&nbsp;Home</Link>
            </div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Uname</th>
                        <th>Password</th>
                        <th>Gender</th>
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
                                    <td>{val.uname}</td>
                                    <td>{val.pwd}</td>
                                    <td>{val.gender}</td>
                                    <td><Link to={`/adupdate/${val.id}`} className="btn btn-primary"><Pencil></Pencil>&nbsp; Update</Link></td>
                                    <td><button onClick={()=>delAd(val.id)} className="btn btn-danger"><Trash3Fill></Trash3Fill>&nbsp;Delete</button></td>
                                    <td><Link to={`/adread/${val.id}`} className="btn btn-success"><DatabaseFillDown></DatabaseFillDown>&nbsp;Fetch</Link></td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
        </div>
    )
}
export default Adview