import React from 'react'

const Note = ({title, description}) => {
  return (
    <div>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default Note