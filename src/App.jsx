import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import CreateNote from "./CreateNote";

function App() {
  const [title, changeTitle] = React.useState("");
  const [text, changeText] = React.useState("");
  const [notesArray, addNotes] = React.useState([]);

  function handleTitle(event) {
    changeTitle(event.target.value);
  }
  function handleText(event) {
    changeText(event.target.value);
  }
  function addItem(event) {
    event.preventDefault();
    addNotes((prevItems) => [...prevItems, { title, text }]);
  }

  function deleteNote(id) {
    console.log(id);
    addNotes((prevItems) => prevItems.filter((item, idx) => idx !== id));
  }
  return (
    <main>
      <Header />{" "}
      <CreateArea
        addItem={addItem}
        handleText={handleText}
        handleTitle={handleTitle}
      />{" "}
      {notesArray.map((item, idx) => (
        <CreateNote
          deleteItem={deleteNote}
          id={idx}
          key={idx}
          title={item.title}
          text={item.text}
        />
      ))}{" "}
      <Footer />{" "}
    </main>
  );
}
export default App;
