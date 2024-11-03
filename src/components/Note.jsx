import React from "react";
import "../styling/note.css";

const Note = ({ title, description, date }) => {
  return (
    <div id="note-item">
      <div id="note-top">
        <h2>{title}</h2>
        <p id="date">{date}</p>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Note;
