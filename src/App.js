import React from 'react';
import './App.css';
import Footer from "./Footer"
import VideoUserProfile from "./VideoUserProfile"
import Header from "./Header"
import Likes from "./Likes"
import Shares from "./Shares"

// THIS WOULD BE THE VIDEO COMPONENT

function App() {
  return (
    <div className="App">
      <Header/>
      <h3>hello, this is a video</h3>
      <VideoUserProfile/>
      <Likes/>
      <Shares/>
      <Footer/>
    </div>
  );
}

export default App;
