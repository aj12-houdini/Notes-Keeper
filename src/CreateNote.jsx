import React from "react";
import Notes from "./Notes";
function createNote(props) {
  return <Notes deleteNotes = {props.deleteItem} id={props.id} title={props.title} text={props.text} />;
}
export default createNote;
