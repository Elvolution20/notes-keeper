import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Elvis Ebuzoaju Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
