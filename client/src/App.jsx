import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './HomePage'
import AboutMe from './AboutMe'



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter basename="/My_Portfolio/">
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
