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

import {PersonCircle,
  PersonCheckFill} from "react-bootstrap-icons"



function Logi() {
  const [inputs,setInputs]=useState
    ({
        uname:'',
        pwd:''
    })

    const inputHandler=(e)=>{
      setInputs(prev=>({...prev,[e.target.name]:[e.target.value]}))
  }

  const nav=useNavigate()

  const submitHandler=(e)=>{
      e.preventDefault()
      Axios.post("http://localhost:3000/logi",inputs)
      .then(res=>{
          if(res.data.Login){
              alert("Login successful")
              nav('/home')
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
            <div><Link to="/logi1" ><PersonCircle></PersonCircle>&nbsp;Staff Login</Link>&nbsp; &nbsp; &nbsp;
            <Link to="/logi2"  ><PersonCheckFill></PersonCheckFill>&nbsp;Student Login</Link></div>
              <h2 className="fw-bold mb-2 text-uppercase">Admin Login</h2>
              <p className="text-white-50 mb-5">Please enter your id and password!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' placeholder='Enter id' onChange={inputHandler} label='Id' id='formControlLg' name="uname" type='text' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' placeholder='Enter passsword' onChange={inputHandler} label='Password' id='formControlLg' name="pwd" type='password' size="lg"/>
<div>
              <button className='btn btn-primary' type="submit" >
                Login
              </button> 
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