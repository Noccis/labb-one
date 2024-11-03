import React from "react";
import Note from "./Note";
import "../styling/noteslist.css";

const NotesList = ({ list }) => {
  let listOfNotes = null;

  if (list != null) {
    listOfNotes = list.map((note, index) => (
      <Note key={index} title={note.title} description={note.description} />
    ));
  }

  return <div id="notes-list">{listOfNotes}</div>;
};

export default NotesList;
