import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./index.css";
function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
