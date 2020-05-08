import React from 'react';
import './App.css';
import unicursalfavicon from './components/resources/unicursalfavicon.jpeg'
import SearchForm from './components/SearchForm/SearchForm'

function App() {
  return (
    <div className="App">
      <div className="mainLogo">
        <img className="hexigram" src={unicursalfavicon} alt="main" />
      </div>
      <div className="ReadingSection">
        <div className="introText">
          <h1>Welcome to today's reading!</h1>
        </div>
        <div className="form">
          <SearchForm />
        </div>
        <div className="madeBy">
          <p>Made by Zach Milan</p>
        </div>
      </div>
    </div>
  );
}

export default App;
