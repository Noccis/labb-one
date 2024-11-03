import React from 'react'
import '../styling/note.css'

const Note = ({title, description}) => {
  return (
    <div id='note-item'>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default Note