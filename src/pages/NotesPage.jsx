import React, { useEffect, useState } from "react";
import NoteInput from "../components/NoteInput";
import NotesList from "../components/NotesList";
import data from "../local-json/projects.json";
import "../styling/notesPage.css";

const NotesPage = () => {
  const [listOfNotes, setListOfNotes] = useState([]);

  useEffect(() => {
    // Genererar mock data
    setListOfNotes(data);
  }, []);

  return (
    <div id="note-content">
      <NoteInput listOfNotes={listOfNotes} setListOfNotes={setListOfNotes} />
      <NotesList list={listOfNotes} />
    </div>
  );
};

export default NotesPage;
