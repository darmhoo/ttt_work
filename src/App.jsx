import { useState } from 'react'

import './App.css'
import Hero from './components/hero/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='font-open-sans'>
    <Hero />
    </div>
    </>
  )
}

export default App
