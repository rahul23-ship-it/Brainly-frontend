
import './App.css'
import { DashBoard } from './Side/Pages/Dashboard'
import { Signin, Signup } from './Side/Pages/Loginpage'
import { SharedBrainPage } from './Side/Pages/SharedBrainPage'
import { BrowserRouter , Routes , Route } from 'react-router-dom'


function App() {
  

  return<BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/dashboard' element={<DashBoard/>}/>
      <Route path='/share/:shareId' element={<SharedBrainPage/>}/>
    </Routes>
  </BrowserRouter>
}

export default App
