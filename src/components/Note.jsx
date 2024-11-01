import React from 'react'

const Note = ({id, title, description}) => {
  return (
    <div id={id}>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default Note