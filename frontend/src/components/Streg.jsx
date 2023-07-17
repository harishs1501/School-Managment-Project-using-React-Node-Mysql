import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import {
    MDBCard
  }
  from 'mdb-react-ui-kit';
  import { FaHome } from 'react-icons/fa';

function Streg(){
    const [regno,setRegno]=useState("")
    const [name,setName]=useState("")
    const [gender,setGender]=useState("")
    const [dob,setDob]=useState("")
    const [city,setCity]=useState("")

    const addEmp = () => {
        Axios.post("http://localhost:3000/savest",
        {
            regno:regno,
            name:name,
            gender:gender,
            dob:dob,
            city:city,
        }).then(()=>{
            console.log("Inserted Successfully")
        })
    }

    return(
        <body>
            <div className='container'>
                <div className='row'>
            <div className='col-3'></div>
            <div className='col-6'>
            <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <h1 class="my-5"><img style={{width:100,height:100,position:'center',leftmargin:20,topmargin:20}} src="https://cdn-icons-png.flaticon.com/512/2886/2886008.png" alt="emp"/>&nbsp;Add Student</h1>
            <div class="container">
                <div class="d-flex justify-content-center">
                    <div class="row">
                        <form onSubmit={addEmp}>
                        <div class="form-group">
                                <label for="name">Student Reg No</label>
                                <input type="text" class="form-control" placeholder="Enter Regno" onChange={(e)=>{setRegno(e.target.value)}} />
                            </div>
                            <div class="form-group">
                                <label for="name">Student Name</label>
                                <input type="text" class="form-control" placeholder="Enter name" onChange={(e)=>{setName(e.target.value)}} />
                            </div>
                            <div class="form-group-check" onChange={(e)=>{setGender(e.target.value)}}>
                                <label for="gender">Gender</label>
                                <input type="radio" class="form-control-check" value="Male" name="gender" />Male
                                <input type="radio" class="form-control-check" value="Female" name="gender" />Female
                            </div>
                            <div class="form-group">
                                <label for="name">DOB</label>
                                <input type="text" class="form-control" placeholder="Enter DOB" onChange={(e)=>{setDob(e.target.value)}} />
                            </div>
                            <div class="form-group">
                                <label for="name">City</label>
                                <input type="text" class="form-control" placeholder="Enter City" onChange={(e)=>{setCity(e.target.value)}} />
                            </div><br></br>
                            <div class="form-group">
                                <input type="submit" class="btn btn-success"/>&nbsp;
                                <Link to="/stview" class="btn btn-info">View Table</Link>
                            </div>
                            <br></br>
                            <div class="d-flex justify-content-center">
                             <Link to="/home" className='btn btn-warning' ><FaHome></FaHome>&nbsp;Home</Link>
                             </div>
                        </form>
                    </div>
                </div>
            </div>
            </MDBCard>
            </div>
            <div className='col-3'></div>
            </div>
            </div>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </body>
    )
}
export default Streg;