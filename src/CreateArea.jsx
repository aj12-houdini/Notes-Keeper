import React from "react";
import AddIcon from "@material-ui/icons/Add";

import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [expand, setExpand] = React.useState(false);

  function expandText() {
    setExpand(true);
  }
  return (
    <div>
      {" "}
      <form className="create-note" onSubmit={props.addItem}>
        {expand && (
          <input
            onChange={props.handleTitle}
            name="title"
            placeholder="Title"
          />
        )}
        <textarea
          onClick={expandText}
          onChange={props.handleText}
          name="content"
          placeholder="Take a note..."
          rows={expand ? "3" : "1"}
        />
        <Zoom in={true}>
          <Fab onClick={props.addItem}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
