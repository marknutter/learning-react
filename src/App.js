import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [catFacts, setCatFacts] = useState("Test");
  let interval
  useEffect(
    () => {
        interval = setInterval(
          () => {
            setCatFacts(Math.random())
          }
        , 500)
        return () => clearInterval(interval);
    },
    []
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
