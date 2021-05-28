import React from 'react';
import logo from './logo.svg';
import './App.css';

import Greettings from './components/Greetings';

function App() {
  const handleClick = (name: string) => {
    console.log(`Hello, ${name}!`);
  }
  return (
    <div className="App">
      <Greettings name="minung" onClick={handleClick} />
    </div>
  );
}

export default App;
