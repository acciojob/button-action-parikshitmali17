import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {

  const [invisible, setInVisible]=useState(true)
  function handleClick(){
    console.log("clicked")
    setInVisible(invisible ? false: true)
  }
  return (
    <div className="App" id="main">
     <p id="para" className={invisible ? "hide" :"show"}>"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"</p>
     <button id="click" onClick={handleClick}>{invisible ? "Show" :"Hide"}</button>
    </div>
  );
}

export default App



// import React, { useState } from "react";
// import './../styles/App.css';

// const App = () => {
  
//   return (
//     <div id="main">
         
//     </div>
//   )
// }

// export default App
