import React,{useEffect,useState} from 'react';
import {useParams,Link} from 'react-router-dom'
import Axios from 'axios';

function Adread(){
    const {id}=useParams()
    const[empList,setEmplist]=useState([])

    useEffect(()=>{
        Axios.get("http://localhost:3000/adread/"+id).then((response)=>{
            setEmplist(response.data)
        })
    })
    return(
        <div>
            <h1>Admin Details</h1>
            {
                empList.map((val,key)=>{
                    return(
                        <div>
                            <h3>Id-{val.id}</h3>
                            <h3>User Name-{val.uname}</h3>
                            <h3>pwd-{val.pwd}</h3>
                            <h3>Gender-{val.gender}</h3>
                            <div className="d-flex justify-content-center">
                             <Link to="/adview" class="btn btn-warning">Admin View</Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Adread