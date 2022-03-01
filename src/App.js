import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [catFacts, setCatFacts] = useState("Test");
  let interval
  useEffect(
    () => {
      if (!interval) {
        debugger
        interval = setInterval(
          () => {
            fetch("https://catfact.ninja/fact", {
              method: "get"
            })
            .then(response => response.json())
            .then(jsonData => {setCatFacts(jsonData.fact); debugger})
          }
        , 5000)
      }
    },
    [catFacts]
  )
  return (
    <div className="App">
      <header className="App-header">
        <p>{catFacts}</p>
      </header>
    </div>
  );
}

export default App;
