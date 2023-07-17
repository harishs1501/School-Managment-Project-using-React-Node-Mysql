import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
from 'mdb-react-ui-kit';

import {PersonFillGear,
  PersonCircle} from "react-bootstrap-icons"



function Logi() {
  const [inputs,setInputs]=useState
    ({
        regno:'',
        dob:''
    })

    const inputHandler=(e)=>{
      setInputs(prev=>({...prev,[e.target.name]:[e.target.value]}))
  }

  const nav=useNavigate()

  const submitHandler=(e)=>{
      e.preventDefault()
      Axios.post("http://localhost:3000/logi2",inputs)
      .then(res=>{
          if(res.data.Login){
              alert("Login successful")
              nav('/home2')
          }else{
              alert("Login Failed")
          }
      })
      .catch(err=>console.log(err))
  }
    
  return (
    <form onSubmit={submitHandler}>
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
            <div><Link to="/" ><PersonFillGear></PersonFillGear>&nbsp;Admin Login</Link>&nbsp; &nbsp; &nbsp;
            <Link to="/logi1"  ><PersonCircle></PersonCircle>&nbsp;Staff Login</Link></div>
              <h2 className="fw-bold mb-2 text-uppercase">Student Login</h2>
              <p className="text-white-50 mb-5">Please enter your Reg No and password!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' placeholder='Enter Reg no' onChange={inputHandler} label='Reg No' id='formControlLg' name="regno" type='text' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' placeholder='Enter DOB' onChange={inputHandler} label='DOB (DD/MM/YYYY)' id='formControlLg' name="dob" type='text' size="lg"/>
<div>
              
              <button className='btn btn-success' type="submit" >
                Login
              </button> 
              <p className="small mb-3 pb-lg-2"><Link to='/forgot'>Forgot password?</Link></p>
              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    </form>
  );
}

export default Logi;