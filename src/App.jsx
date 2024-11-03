import "./App.css";
import NotesPage from "./pages/NotesPage";

function App() {
  return (
    <>
      <header className="flex-column">
        <h1>Leave me a note</h1>
        <p id="subtitle">Första labben</p>
      </header>
      <main className="flex-column">
        <NotesPage />
      </main>
    </>
  );
}

export default App;
