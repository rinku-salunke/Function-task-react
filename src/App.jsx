import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Templates/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Student details</h1>
      <div className='grid'> 
        <Home  name="Rinku" Bio="Full Stack Java Developer"/>
        <Home  name="Snehal" Bio="Bank Manager"/>
        <Home  name="Punam" Bio="Compititive Exam"/>
        <Home  name="Priyuu" Bio="Owner"/>

        </div>
    </>
  )
}

export default App
