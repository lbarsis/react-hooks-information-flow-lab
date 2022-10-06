import React from "react";

function Header({isDarkMode, onDarkModeClick}) {

  // function onDarkModeClick() {
  //   setIsDarkMode(isDarkMode => !isDarkMode);
  // }

  return (
    // <header>
    //   <h2>Shopster</h2>
    //   {isDarkMode ? <button onClick={onDarkModeClick}>Light Mode</button> : 
    //     <button onClick={onDarkModeClick}>Dark Mode</button>}
    // </header>

    <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
  )
}

export default Header

