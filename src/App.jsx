import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='flex-column'>
        <h1>Första labben</h1>
      </header>
      <main className='flex-column'>
        <p>Här ska första labben vara</p>
        <p>Blablabla</p>
      </main>
    </>
  )
}

export default App
