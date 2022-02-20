import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  //data note array
  const [notes, setNotes] = useState([]);

  //add note apply at CreateArea comp
  function addNote(inputNote) {
    setNotes((prevValue) => {
      return [...prevValue, inputNote];
    });
  }

  //delete note apply at Note comp
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
      <CreateArea
        //pass func add
        addText={addNote}
      />
      {notes.map((note, index) => (
        <Note
          // pass func delete
          clicked={deleteNote}
          key={index}
          uid={index}
          title={note.title}
          content={note.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
