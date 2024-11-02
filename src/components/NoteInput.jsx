import React, { useState } from 'react'

const NoteInput = () => {
  const [note, setNote] = useState({title: '', description: ''});

  const handleChange = ((e)=>setNote({...note, [e.target.name]: e.target.value}));

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(note)
  }

  return (
    <div>
      <form  onSubmit={handleSubmit}>
        <input
        type='text'
        name='title'
        value={note.title}
        onChange={handleChange} />

        <input
        type='text'
        name='description'
        value={note.description}
        onChange={handleChange} />

        <input 
        type='submit'/>        
      </form>
    </div>
  )
}

export default NoteInput