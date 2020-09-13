import React, { useState, useEffect } from "react";
import logo from "./bgpic.jpg";
import "./App.css";

function App() {
  const [initialData, setInitialData] = useState([{}]);
  useEffect(() => {
    fetch("http://10.0.2.180:5000/api")
      .then((response) => response.json())
      .then((data) => setInitialData(data), []);
  });

  return (
    <div className="App">
      <header>
        <h1>Edureka First Project</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{initialData.title}</h1>
      </header>
    </div>
  );
}

export default App;
