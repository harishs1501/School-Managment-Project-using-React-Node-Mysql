import React,{useEffect,useState} from 'react';
import {useParams,Link} from 'react-router-dom'
import Axios from 'axios';

function Staread(){
    const {id}=useParams()
    const[empList,setEmplist]=useState([])

    useEffect(()=>{
        Axios.get("http://localhost:3000/staread/"+id).then((response)=>{
            setEmplist(response.data)
        })
    })
    return(
        <div>
            <h1>Complaint Detail</h1>
            {
                empList.map((val,key)=>{
                    return(
                        <div>
                            <h3>Id-{val.id}</h3>
                            <h3>Name-{val.name}</h3>
                            <h3>Email-{val.email}</h3>
                            <h3>Gender-{val.gender}</h3>
                            <h3>Category-{val.category}</h3>
                            <h3>Problem-{val.prblm}</h3>
                            <h3>Status-{val.status}</h3>
                            <div className="d-flex justify-content-center">
                             <Link to="/complaint" class="btn btn-warning">Complaint</Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Staread