// App.js

import React from 'react';
// import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Hero />
      </header>
    </div>
  );
}

export default App;
