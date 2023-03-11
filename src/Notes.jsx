import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
function Notes(props) {
  const notesEl = (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <button
        onClick={() => props.deleteNotes(props.id)}
        style={{ width: "100px" }}
      >
        <DeleteIcon />
      </button>
    </div>
  );

  return notesEl;
}

export default Notes;
