import { useState } from 'react'
import './App.css'
import Authentication from './getLoan/authentication';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Authentication />
    </>
  )
}

export default App