import React, { useState } from "react";
import "./App.css";
import AudioPlayer from "./components/AudioPlayer";
import Playlist from "./components/Playlist";
import FileUploader from "./components/FileUploader";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [audioFiles, setAudioFiles] = useState([]);

  const handleUpload = (fileData, fileName) => {
    // Store the file data and name in the audioFiles array
    setAudioFiles([...audioFiles, { data: fileData, name: fileName }]);
  };

  const onAudioChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="App">
      <AudioPlayer audioFiles={audioFiles} currentIndex={currentIndex} />
      <Playlist audioFiles={audioFiles} currentIndex={currentIndex} onAudioChange={onAudioChange} />
      <FileUploader onUpload={handleUpload} />
    </div>
  );
}

export default App;
