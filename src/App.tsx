import React from 'react';
import logo from './logo.svg';
import './App.css';
import MealTime from './MealTime';
import './index.css'; // Tailwind CSS 적용

function App() {
  return (
    <div className="App">
            <MealTime />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
