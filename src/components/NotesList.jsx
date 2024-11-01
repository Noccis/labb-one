import React from 'react'
import data from '../local-json/projects.json'
import Note from './Note';

const NotesList = () => {

    let listOfNotes = null;

    if(data != null){
        listOfNotes = data.map((note, index)=> (
                <Note 
                id={index} 
                title={note.title} 
                description={note.description}/>        
        ))
    }

  return (
    <div>
        {listOfNotes}
    </div>
  )
}

export default NotesList