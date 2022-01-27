import React from "react";

function Header({text,bgColor,textColor}) {
    const headerStyles={
        backgroundColor:bgColor,
        color:textColor,
    }
  return (
    <header style={headerStyles} >
      <div className="container">
        <h2>{text} </h2>
      </div> 
    </header>
  );
}
Header.defaultProps ={
text:'FEEDBACK--APP',
bgColor:'rgba(0,0,0,0.4)',
textColor:'#00008B',
}
export default Header;
