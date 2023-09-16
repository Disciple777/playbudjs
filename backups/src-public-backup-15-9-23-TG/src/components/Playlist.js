import React from "react";

function Playlist({ audioFiles, currentIndex, onAudioChange }) {
  return (
    <div className="playlist">
      <h2>Playlist</h2>
      <ul>
        {audioFiles.map((audioFile, index) => (
          <li
            key={index}
            className={currentIndex === index ? "active" : ""}
            onClick={() => onAudioChange(index)}
          >
            {audioFile.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Playlist;
