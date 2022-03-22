import React, { useState, useEffect } from "react";

// Components
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";

export default function App() {
  const [notes, setNotes] = useState(() => {
    const storageNotes = localStorage.getItem("@KeeperApp:notes");

    if (storageNotes) {
      return JSON.parse(storageNotes);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem("@KeeperApp:notes", JSON.stringify(notes));
  }, [notes]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) =>
      prevNotes.filter((note, index) => {
        return index !== id;
      }),
    );
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map(({ title, content }, index) => (
        <Note
          key={index}
          id={index}
          title={title}
          content={content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}
