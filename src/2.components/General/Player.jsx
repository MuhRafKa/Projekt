import React from 'react';
import AudioPlayer from "react-h5-audio-player";


const Player = () => (
  <AudioPlayer
    autoPlay
    src= "https://archive.org/download/ird059/tcp_d1_01_the_swedish_rhapsody_irdial.mp3"
    onPlay={e => console.log("onPlay")}
    // other props here
  />
);

export default Player;