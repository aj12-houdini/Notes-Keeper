import React from "react";

const date = new Date();

function Footer() {
  const footerEl = (
    <footer>
      <p> Copyright &copy;{date.getFullYear()}</p>
    </footer>
  );

  return footerEl;
}

export default Footer;
