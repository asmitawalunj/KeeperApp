import React, { useState , useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Axios from "axios";

function App() {


  const [notes, setNotes] = useState([]);

  function addNote(note) {
  setNotes((prevNotes) => {
    return [
      ...prevNotes,
      note
    ]
  })
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });

  }

  return (
    <div>
      <Header />

      <CreateArea onAdd={addNote} />

      {notes.map((note, index) => {
        return [
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onClicked={deleteNote}
          />
        ];
      })}

      <Footer />
    </div>
  );
}

export default App;
