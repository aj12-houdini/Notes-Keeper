import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";

function Header() {
  const headerEl = (
    <header>
      <h1>
        <HighlightIcon />
        Keeper
      </h1>
    </header>
  );

  return headerEl;
}

export default Header;
