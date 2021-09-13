import React from "react";

// Fake Notes from a JSON
import notes from "../notes";

// Components
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

export default function App() {
  return (
    <div>
      <Header />
      {notes.map(({ key, title, content }) => (
        <Note key={key} title={title} content={content} />
      ))}
      <Footer />
    </div>
  );
}
