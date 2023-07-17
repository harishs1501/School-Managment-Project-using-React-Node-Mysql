import './App.css';
import Logi from './components/Logi'
import Logi1 from './components/Logi1'
import Logi2 from './components/Logi2'
import Adreg from './components/Adreg'
import Sfreg from './components/Sfreg'
import Sfread from './components/Sfread'
import Streg from './components/Streg'
import Adview from './components/Adview'
import Adread from './components/Adread'
import Sfview from './components/Sfview'
import Sfview1 from './components/Sfview1'
import Stview from './components/Stview'
import Stread from './components/Stread'
import Staread from './components/Staread'
import Adupdate from './components/Adupdate'
import Sfupdate from './components/Sfupdate'
import Stupdate from './components/Stupdate'
import Stmark from './components/Stmark'
import Result from './components/Result'
import Rpage from './components/Rpage'
import Homen from './components/Homen'
import Homen1 from './components/Homen1'
import Homen2 from './components/Homen2'
import Forgot from './components/Forgot'
import Fpage from './components/Fpage'
import Complaint from './components/Complaint'
import Staupdate from './components/Staupdate'


import{BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Fpage/>}/>
      <Route path='/logi' element={<Logi/>}/>
      <Route path='/logi1' element={<Logi1/>}/> 
      <Route path='/logi2' element={<Logi2/>}/> 
      </Routes>

      <Routes>
      <Route path='/home' element={<Homen/>}/> 
      <Route path='/home1' element={<Homen1/>}/> 
      <Route path='/home2' element={<Homen2/>}/> 
      <Route path='/adreg' element={<Adreg/>}/> 
      <Route path='/sfreg' element={<Sfreg/>}/> 
      <Route path='/streg' element={<Streg/>}/> 
      <Route path='/adview' element={<Adview/>}/> 
      <Route path='/sfview' element={<Sfview/>}/> 
      <Route path='/sfview1' element={<Sfview1/>}/> 
      <Route path='/stview' element={<Stview/>}/>
      <Route path='/adread/:id' element={<Adread/>}/>
      <Route path='/sfread/:id' element={<Sfread/>}/> 
      <Route path='/stread/:id' element={<Stread/>}/> 
      <Route path='/staread/:id' element={<Staread/>}/> 
      <Route path='/adupdate/:id' element={<Adupdate/>}/> 
      <Route path='/sfupdate/:id' element={<Sfupdate/>}/>
      <Route path='/stupdate/:id' element={<Stupdate/>}/>
      <Route path='/stmark' element={<Stmark/>}/>
      <Route path='/rpage' element={<Rpage/>}/>
      <Route path='/result' element={<Result/>}/>
      <Route path='/forgot' element={<Forgot/>}/>
      <Route path='/complaint' element={<Complaint/>}/>
      <Route path='/staupd' element={<Staupdate/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
