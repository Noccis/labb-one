import React, { useState, useRef } from "react";
import "../App.css";
import "../styling/noteInput.css";

const NoteInput = ({ listOfNotes, setListOfNotes }) => {
  const [note, setNote] = useState({ title: "", description: "", date: "" });
  const topInputRef = useRef(null);

  const handleChange = (e) =>
    setNote({ ...note, [e.target.name]: e.target.value });

  function getTodaysDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${year}/${month}/${date}`;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const addedDate = getTodaysDate();

    // Skapar ett nytt objekt för att när jag körde setNote så kom inte datumet med eftersom den är asynk
    const updatedNote = { ...note, date: addedDate };
    setListOfNotes([...listOfNotes, updatedNote]);
    // Rensa input fields
    setNote({ title: "", description: "", date: "" });

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
