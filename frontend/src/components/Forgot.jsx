import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import {
    MDBCard
  }
  from 'mdb-react-ui-kit';
import { FaHome } from 'react-icons/fa';

function Forgot(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [gender,setGender]=useState("")
    const [category,setCategory]=useState("")
    const [prblm,setPrblm]=useState("")


    const addPrblm = () => {
        Axios.post("http://localhost:3000/forgot",
        {
            name:name,
            email:email,
            gender:gender,
            category:category,
            prblm:prblm
        }).then(()=>{
            alert("Complaint added successfully")
        })
    }

    return(
        <body>
             <div className='container'>
                <div className='row'>
            <div className='col-3'></div>
            <div className='col-6'>
            <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <h3 class="my-5"><img style={{width:100,height:100,position:'center',leftmargin:20,topmargin:20}} src="https://th.bing.com/th/id/OIP.VqlTQn6T36qJmpcuBud10gAAAA?pid=ImgDet&w=422&h=421&rs=1" alt="emp"/><br></br>Forgot Username/Password</h3>
            <div class="container">
                <div class="d-flex justify-content-center">
                    <div class="row">
                        <form onSubmit={addPrblm}>
                            <div class="form-group">
                              <h6> <label for="name">Employee Name/Student Name</label></h6>
                                <input type="text" class="form-control" placeholder="Enter name" onChange={(e)=>{setName(e.target.value)}} required />
                            </div>
                            <div class="form-group">
                               <h6> <label for="email">Email</label></h6>
                               <li>(If your a student it is not Mandatory)</li>
                                <input type="email" class="form-control" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} />
                            </div>
                            <div class="form-group-check" onChange={(e)=>{setGender(e.target.value)}} required>
                                <label for="gender">Gender -</label>&nbsp;
                                <input type="radio" class="form-control-check"  value="Male" name="gender" />Male &nbsp;
                                <input type="radio" class="form-control-check" value="Female" name="gender" />Female
                            </div>
                            <div class="form-group">
                                <h6><label for="category" >Category</label></h6>
                                <select className="form-control" onChange={(e)=>{setCategory(e.target.value)}}  required>
                                    <option></option>
                                    <option value="Staff">Staff</option>
                                    <option value="Student">Student</option>
                                </select>
                            </div>
                            
                            <div class="form-group">
                               <h6> <label for="prblm">Type your Problem here...</label></h6>
                                <textarea size="5" class="form-control" placeholder="Enter your problems" onChange={(e)=>{setPrblm(e.target.value)}} required/>
                            </div>
                            <div class="form-group">
                                <input type="submit" class="btn btn-success my-2"/>&nbsp;
                                <button class="btn btn-danger my-2" type='reset'>Reset</button>
                            </div>
                          
                            <div class="d-flex justify-content-center">
                <Link to="/" className='btn btn-warning my-2' ><FaHome></FaHome>&nbsp;Home</Link>
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
export default Forgot;