import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'
import {Link} from 'react-router-dom'

function Stmark(){
    const [empList,setEmplist]=useState([])
    const viewEmptable=()=>{
        Axios.get("http://localhost:3000/stview").then((response)=>{
            setEmplist(response.data)
        })
    }


    return(
        <div>
            <h1>STUDENTS LIST</h1>
            <button class="btn btn-primary" onClick={viewEmptable}>Student and Mark List</button>
            <div className="d-flex justify-content-end">
             <Link to="/home1" class="btn btn-info">Home</Link>
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
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
        </div>
    )
}
export default Stmark