import { useState } from 'react'
import './App.css'
import NotesList from './components/NotesList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='flex-column'>
        <h1>Leave me a note</h1>
        <h3>Första labben</h3>
      </header>
      <main className='flex-column'>
        <NotesList />
      </main>
    </>
  )
}

export default App
