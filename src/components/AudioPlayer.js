import React, { useState, useRef, useEffect } from "react";

function AudioPlayer({ audioFiles, currentIndex }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    // Ensure that audioRef.current is not null
    if (audioRef.current) {
      audioRef.current.src = audioFiles[currentIndex];
      // Wait for the audio to be loaded before setting its currentTime
      audioRef.current.addEventListener("loadedmetadata", () => {
        setCurrentTime(audioRef.current.currentTime);
      });
    }
  }, [audioFiles, currentIndex]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleRewind = () => {
    audioRef.current.currentTime -= 15;
  };

  const handleForward = () => {
    audioRef.current.currentTime += 5;
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
    setCurrentPosition((audioRef.current.currentTime / audioRef.current.duration) * 100 || 0);
  };

  // Add logic for previous and next track buttons here

  const handleBookmark = () => {
    // Implement bookmark functionality
  };

  useEffect(() => {
    // ... (rest of the useEffect code)

    // Update the currentPosition state continuously
    const updateCurrentPosition = () => {
      if (audioRef.current) {
        setCurrentPosition((audioRef.current.currentTime / audioRef.current.duration) * 100 || 0);
      }
    };

    const intervalId = setInterval(updateCurrentPosition, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [audioFiles, currentIndex]);


  return (
    <div className="audio-player">
      <audio ref={audioRef} />
      <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
      <button onClick={handleRewind}>Rewind</button>
      <button onClick={handleForward}>Forward</button>
      <input
        type="range"
        value={currentPosition}
        onChange={handleSeek}
        className="seek-bar"
      />
      {/* Add previous and next track buttons here */}
      <button onClick={handleBookmark}>Bookmark</button>
      <p>Current Time: {currentTime}</p>
    </div>
  );
}

export default AudioPlayer;
