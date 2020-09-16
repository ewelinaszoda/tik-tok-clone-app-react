import React from 'react';
import './App.css';

function App() {
  return (
    // BEM
    <div className="app">
      <h1>hello! Let's built Tik Tok Clone</h1>
      <div className="app__videos">
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
