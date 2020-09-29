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
        <Video
          url=""
          channel="evie"
          description="WOW is working"
          song="The happy song"
          likes={123}
          message={400}
          shares={200}
        />
        <Video />
        <Video />
        <Video />
      </div>
      {/* </center> */}
    </div>
  );
}

export default App;
