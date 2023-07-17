import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import {
    MDBCard
  }
  from 'mdb-react-ui-kit';
import { FaHome } from 'react-icons/fa';

function Sfreg(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [pwd,setPwd]=useState("")
    const [gender,setGender]=useState("")
    const [age,setAge]=useState(0)
    const [subject,setSubject]=useState("")

    const addEmp = () => {
        Axios.post("http://localhost:3000/savesf",
        {
            name:name,
            email:email,
            pwd:pwd,
            gender:gender,
            age:age,
            subject:subject
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
            <h1 class="my-5"><img style={{width:100,height:100,position:'center',leftmargin:20,topmargin:20}} src="https://icon-library.com/images/staff-icon-png/staff-icon-png-2.jpg" alt="emp"/>&nbsp;Add Staff</h1>
            <div class="container">
                <div class="d-flex justify-content-center">
                    <div class="row">
                        <form onSubmit={addEmp}>
                            <div class="form-group">
                                <label for="name">Employee Name</label>
                                <input type="text" class="form-control" placeholder="Enter name" onChange={(e)=>{setName(e.target.value)}} required />
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} required/>
                            </div>
                            <div class="form-group">
                                <label for="pwd">Password</label>
                                <input type="password" class="form-control" placeholder="Enter password" onChange={(e)=>{setPwd(e.target.value)}} required/>
                            </div>
                            <div class="form-group-check" onChange={(e)=>{setGender(e.target.value)}} required>
                                <label for="gender">Gender</label>
                                <input type="radio" class="form-control-check" value="Male" name="gender" />Male
                                <input type="radio" class="form-control-check" value="Female" name="gender" />Female
                            </div>
                            <div class="form-group">
                                <label for="age">Age</label>
                                <input type="text" class="form-control"  onChange={(e)=>{setAge(e.target.value)}} required />
                            </div>
                            <div class="form-group">
                                <label for="name">Subject</label>
                                <input type="text" class="form-control" placeholder="Enter Subject" onChange={(e)=>{setSubject(e.target.value)}} required />
                            </div><br></br>
                            <div class="form-group">
                                <input type="submit" class="btn btn-success"/>&nbsp;
                                <Link to="/sfview" class="btn btn-info">View Table</Link>
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
            </div>
            </div>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </body>
    )
}
export default Sfreg;