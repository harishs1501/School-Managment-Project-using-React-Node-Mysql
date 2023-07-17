import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'
import {Link} from 'react-router-dom'

function Sfview1(){
    const [empList,setEmplist]=useState([])
    const viewEmptable=()=>{
        Axios.get("http://localhost:3000/sfview").then((response)=>{
            setEmplist(response.data)
        })
    }


    return(
        <div>
            <h1>STAFF LIST</h1>
            <button class="btn btn-primary" onClick={viewEmptable}>Staff View</button>
            <div className="d-flex justify-content-end">
                                <Link to="/home1" class="btn btn-warning">Home</Link>
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
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
        </div>
    )
}
export default Sfview1