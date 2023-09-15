import React, { useState } from "react";
import "./App.css";
import AudioPlayer from "./components/AudioPlayer";
import Playlist from "./components/Playlist";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const audioFiles = ["audio1.mp3", "audio2.mp3"];

  return (
    <div className="App">
      <AudioPlayer audioFiles={audioFiles} currentIndex={currentIndex} />
      <Playlist audioFiles={audioFiles} currentIndex={currentIndex} />
    </div>
  );
}

export default App;
