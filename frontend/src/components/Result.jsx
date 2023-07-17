import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
from 'mdb-react-ui-kit';



function Result() {
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
      Axios.get("http://localhost:3000/result",inputs)
      .then(res=>{
          if(res){
              alert("Result Got")
              nav('/rpage')
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
              <h2 className="fw-bold mb-2 text-uppercase">Result</h2>
              <p className="text-white-50 mb-5">Please enter your regno and dob!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' onChange={inputHandler} label='regno' id='formControlLg' name="regno" type='text' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' onChange={inputHandler} label='dob' id='formControlLg' name="dob" type='text' size="lg"/>
            <div>
              <button className='btn btn-primary' type="submit" >
                Get Result
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

export default Result;