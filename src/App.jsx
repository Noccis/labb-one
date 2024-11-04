import "./App.css";
import Footer from "./components/Footer";
import NotesPage from "./pages/NotesPage";

function App() {
  return (
    <>
      <header className="flex-column">
        <h1>Leave me a note</h1>
      </header>
      <main className="flex-column">
        <NotesPage />
      </main>
      <Footer />
    </>
  );
}

export default App;
