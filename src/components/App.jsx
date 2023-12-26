import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import CreateArea from "./CreateArea";

function App() {
  return (
    <div>
      <Header />
      <CreateArea />
      {/* <div className = "property">
        {notes.map(function (note) {
            return <Note key={note.key} head={note.title} desc={note.content} />;
        })}
      </div> */}
      <Footer />
    </div>
  );
}

export default App;
