import React,{useEffect,useState} from 'react';
import {useParams,Link} from 'react-router-dom'
import Axios from 'axios';

function Stread(){
    const {id}=useParams()
    const[empList,setEmplist]=useState([])

    useEffect(()=>{
        Axios.get("http://localhost:3000/stread/"+id).then((response)=>{
            setEmplist(response.data)
        })
    })
    return(
        <div>
            <h1>Student Detail</h1>
            {
                empList.map((val,key)=>{
                    return(
                        <div>
                            <h3>Id-{val.id}</h3>
                            <h3>Reg No-{val.regno}</h3>
                            <h3>Name-{val.name}</h3>
                            <h3>Gender-{val.gender}</h3>
                            <h3>DOB-{val.dob}</h3>
                            <h3>City-{val.city}</h3>
                            <div className="d-flex justify-content-center">
                             <Link to="/stview" class="btn btn-warning">Student View</Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Stread