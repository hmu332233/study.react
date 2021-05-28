import React from 'react';
import logo from './logo.svg';
import './App.css';

import Greettings from './components/Greetings';
import Counter from './components/Counter';
import MyForm from './components/MyForm';

function App() {
  const handleClick = (name: string) => {
    console.log(`Hello, ${name}!`);
  }

  const handleSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <div className="App">
      <Greettings name="minung" onClick={handleClick}  />
      <Counter />
      <MyForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
