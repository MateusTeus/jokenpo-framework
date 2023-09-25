import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Game from './Container/Jogo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Game/>
    </>
  )
}

export default App
