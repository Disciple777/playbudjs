import React from "react";

function Playlist({ audioFiles, currentIndex }) {
  return (
    <div>
      <h2>Playlist</h2>
      <ul>
        {audioFiles.map((file, index) => (
          <li key={index} className={index === currentIndex ? "active" : ""}>
            {file}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Playlist;
