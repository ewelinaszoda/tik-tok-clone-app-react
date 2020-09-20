import React from 'react';
import Video from "./Video"
import './App.css';

function App() {
  return (
    // BEM
    <div className="app">
      {/* center video only horizontal */}
      {/* <center> */}
        <div className="app__videos">
          <Video />
          <Video />
          <Video />
          <Video />
        </div>
      {/* </center> */}
    </div>
  );
}

export default App;
