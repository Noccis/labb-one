import React, { useEffect, useState } from 'react'
import NoteInput from '../components/NoteInput'
import NotesList from '../components/NotesList'
import data from '../local-json/projects.json'

const NotesPage = () => {
    const [listOfNotes, setListOfNotes] = useState([]);

    useEffect(()=> {
        console.log("NotePage rendering!")
        setListOfNotes(data);    
    }, [])

  return (
    <div id='note-content'>
        <NoteInput />
        <NotesList list={listOfNotes}/>
    </div>
  )
}

export default NotesPage