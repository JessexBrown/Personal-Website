import { useState } from 'react'
import MainPageContent from './components/MainPageContent'
import './App.css'
import MainPageNavbar from './components/MainPageNavbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <MainPageNavbar/>
      <MainPageContent/>
    </>
  )
}

export default App
