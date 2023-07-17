import React from "react";
import { useState } from "react";
import Axios from "axios";
// import { useNavigate } from "react-router-dom"; 
function Profile() {
  const [studentList, setStudentList] = useState([]);

//   let navigate = useNavigate();


  const getStudent = () => {
    Axios.get("http://localhost:3000/result").then((response) => {
      setStudentList(response.data);
    });
  };

 

  return (
    <div className="students">
      <button onClick={getStudent}>Show Students</button>
      <h3>
      </h3>
      {studentList.map((val, key) => {
        return (
          
          <div className="student">
            <div>
              <h3>Email: {val.regno}</h3>
              <h3>Password: {val.name}</h3>
              <h3>Student Number: {val.m1}</h3>
              <h3>First Name: {val.m2}</h3>
              <h3>Middle Name: {val.m3}</h3>
              <h3>Last Name: {val.m4}</h3>
              <h3>Year Level: {val.m5}</h3>
            </div>
           
          </div>
        );
      })}
    </div>
  );
}
export default Profile;