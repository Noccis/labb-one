import React, { useState, useRef } from "react";
import "../App.css";
import "../styling/noteInput.css";

const NoteInput = ({ listOfNotes, setListOfNotes }) => {
  const [note, setNote] = useState({ title: "", description: "" });
  const topInputRef = useRef(null);

  const handleChange = (e) =>
    setNote({ ...note, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setListOfNotes([...listOfNotes, note]);
    setNote({ title: "", description: "" });
    
    // Ser till att översta input rutan markeras igen efter att man submittat för att enkelt kunna lägga till fler noteringar
    if (topInputRef.current) {
      topInputRef.current.focus();
    }
  };

  return (
    <div id="input-form">
      <form onSubmit={handleSubmit} className="flex-column">
        <input
          type="text"
          name="title"
          placeholder="Titel"
          value={note.title}
          onChange={handleChange}
          ref={topInputRef}
        />

        <input
          type="text"
          name="description"
          placeholder="Notering"
          value={note.description}
          onChange={handleChange}
        />

        <input type="submit" value={"Lägg till"} />
      </form>
    </div>
  );
};

export default NoteInput;
