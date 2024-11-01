import React from 'react'
import data from '../local-json/projects.json'

const NotesList = () => {

    let listOfNotes = null;

    if(data != null){
        listOfNotes = data.map((note, index)=> (
            <div key={index}>
                <p>{note.title}</p>
                <p>{note.description}</p>

            </div>
        ))
    }

  return (
    <div>
        {listOfNotes}
    </div>
  )
}

export default NotesList