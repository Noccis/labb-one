import React, { useState } from 'react'
import '../App.css'
import '../styling/noteInput.css'

const NoteInput = ({listOfNotes, setListOfNotes}) => {
  const [note, setNote] = useState({title: '', description: ''});

  const handleChange = ((e)=>setNote({...note, [e.target.name]: e.target.value}));

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(note)
    setListOfNotes([...listOfNotes, note])
  }

  return (
    <div id='input-form'>
      <form  onSubmit={handleSubmit} className='flex-column'>
        <input
        type='text'
        name='title'
        placeholder='Titel'
        value={note.title}
        onChange={handleChange} />

        <input
        type='text'
        name='description'
        placeholder='Notering'
        value={note.description}
        onChange={handleChange} />

        <input 
        type='submit'
        value={'Lägg till'}/>        
      </form>
    </div>
  )
}

export default NoteInput