import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'

function Fpage(){
    return(
<div className='container'>
    <div>
       <p><h1>LOGIN INTO FOLLOWING CATEGORIES WHICH YOU WANT</h1>
    </p>
    </div>
   <div className='row'>
     <div className='col-4 my-5'>
      <div className='d-flex justify-content-center my-5 '>
       <Link to='/logi' ><img width={300} height={300} src="https://icon-library.com/images/icon-administrator/icon-administrator-2.jpg" alt="admin"/><br></br><h3>ADMIN</h3></Link>
      </div>
      </div>
      <div className='col-4 my-5'>
      <div className='d-flex justify-content-center my-5'>
        <Link to='/logi1'><img width={300} height={300} src="https://icon-library.com/images/staff-icon-png/staff-icon-png-2.jpg" alt=""/><br></br><h3>STAFF</h3></Link>
      </div>
      </div>
      <div className='col-4 my-5'>
      <div className='d-flex justify-content-center my-5'>
      <Link to='/logi2' ><img width={300} height={300} src="https://cdn-icons-png.flaticon.com/512/2886/2886008.png" alt=""/><br></br><h3>STUDENT</h3></Link>
        </div>
      </div>
      
        </div>
    
        </div>
        
    )
}
export default Fpage;