import React from 'react';
import pen from './images/spilled-ink.jpg';
import Subscribe from './sign-up/sign-up.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p className="title">
          Fountain Pen Finder
      </p>
      
      <div className='flex'>
      <p className="about intro">
        Looking for a better way to keep track of your growing fountain pen collection? <br></br>Tired of losing your expensive pens? 
        
      </p>
      <img src={pen} className="image"/>
      </div>
        
        
      <p className='about try'>
        Try Fountain Pen Finder! An innovative new collection management system specifically for fountain pen collectors. 
      </p>
        <Subscribe/>
      </header>
    </div>

  
  );
}

export default App;
