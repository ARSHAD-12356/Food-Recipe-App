// import { useState } from 'react'
import './App.css'
import MainPage from './components/MainPage'
import {Route,Routes} from 'react-router-dom';
import Mealinfo from './components/Mealinfo';

function App() {
  // const [count, setCount] = useState(0)

  return (
      //  <MainPage/>
       <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/:mealid' element={<Mealinfo/>}/>
       </Routes>

  )
}

export default App
