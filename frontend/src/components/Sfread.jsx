import React,{useEffect,useState} from 'react';
import {useParams,Link} from 'react-router-dom'
import Axios from 'axios';

function Sfread(){
    const {id}=useParams()
    const[empList,setEmplist]=useState([])

    useEffect(()=>{
        Axios.get("http://localhost:3000/sfread/"+id).then((response)=>{
            setEmplist(response.data)
        })
    })
    return(
        <div>
            <h1>Staff Details</h1>
            {
                empList.map((val,key)=>{
                    return(
                        <div>
                            <h3>Id-{val.id}</h3>
                            <h3>Name-{val.name}</h3>
                            <h3>Email-{val.email}</h3>
                            <h3>pwd-{val.pwd}</h3>
                            <h3>Gender-{val.gender}</h3>
                            <h3>Age-{val.age}</h3>
                            <h3>Subject-{val.subject}</h3>
                            <div className="d-flex justify-content-center">
                             <Link to="/sfview" class="btn btn-warning">Staff View</Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Sfread