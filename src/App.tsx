
import './App.css'
import { DashBoard } from './Side/Pages/Dashboard'
import { Signin, Signup } from './Side/Pages/Loginpage'
import { BrowserRouter , Routes , Route } from 'react-router-dom'


function App() {
  

  return<BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/dashboard' element={<DashBoard/>}/>
    </Routes>
  </BrowserRouter>
}

export default App
