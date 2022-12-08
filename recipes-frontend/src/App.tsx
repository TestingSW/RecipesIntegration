import React from 'react';
import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './views/Header';
import Recipe from './views/Recipe';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Recipe></Recipe>
    </div>
  );
}

export default App;
