import React, { useState } from 'react';
import audioExtensions from '../lists/audioExtensions.json';
import imageExtensions from '../lists/imageExtensions.json';
import videoExtensions from  '../lists/videoExtensions.json';
import GridCartUI from './GridCartUI';

export default function GridCart() {
  //states
  const [televisao, setTelevisao] = useState(true);
  const [radio, setRadio] = useState(true);
  const [video, setVideo] = useState(true);
  const [web, setWeb] = useState(true);
  const [mobile, setMobile] = useState(true);
  const [input, setInput] = useState(true);

  //extensionCheckers
  const isAudio = (e) => {
    const ext = e.substr(e.lastIndexOf('.'));
    if(audioExtensions.includes(ext))
        return true 
  }
  const isVideo = (e) => {
    const ext = e.substr(e.lastIndexOf('.'));
    if(videoExtensions.includes(ext))
        return true 
  }
  const isImage = (e) => {
    const ext = e.substr(e.lastIndexOf('.'));
    if(imageExtensions.includes(ext))
        return true 
  }
  //check the url extensions to manage state
  const turnOnButtons = (e) => {
    setTelevisao(!isVideo(e));
    setRadio(!isAudio(e));
    setVideo(!isVideo(e));
    setWeb(!isVideo(e) && !isImage(e));
    setMobile(!isImage(e) && !isVideo(e));
  }
  return (
    <div>
      <GridCartUI
        turnOnButtons={turnOnButtons}
        input={input} 
        televisao={televisao}
        video={video}
        web={web}
        radio={radio}
        mobile={mobile}
        isImage={isImage}
      />
    </div>
  );
}