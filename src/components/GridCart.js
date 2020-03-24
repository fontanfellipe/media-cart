import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MediaSelection from './MediaSelection';
import Sider from './Sider';


const isAudio = (e) => {
  'use strict';
  const path = require('path');
  const audioExtensions = require('audio-extensions');
  
  const extensions = new Set(audioExtensions);
  
  module.exports = filePath => extensions.has(path.extname(filePath).slice(1).toLowerCase());  
}

//some npm packages to check the extension of url

//const isAudio = require('is-audio');
const isImage = require('is-image');
const isVideo = require('is-video');

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 0
  },

}));

export default function FullWidthGrid() {
  const classes = useStyles();
  const [televisao, setTelevisao] = useState(true);
  const [radio, setRadio] = useState(true);
  const [video, setVideo] = useState(true);
  const [web, setWeb] = useState(true);
  const [mobile, setMobile] = useState(true);
  const [input, setInput] = useState(true);

  //check the url extensions to manage state
  const turnOnButtons = (e) => {
    setTelevisao(!isVideo(e));
    setRadio(!isAudio(e));
    setVideo(!isVideo(e));
    setWeb(!isVideo(e) && !isImage(e));
    setMobile(!isImage(e) && !isVideo(e));
  }

  return (
    <div className={classes.root}>
      <Grid 
        container
        direction='row'
        spacing={0}>
        <Grid item sm={12} md={8} lg={10}>
          <MediaSelection 
            turnOnButtons={turnOnButtons}
            input={input} 
            televisao={televisao}
            video={video}
            web={web}
            radio={radio}
            mobile={mobile} 
          />
        </Grid>
        <Grid item sm={12} md={4} lg={2}>
        <Sider
          input={input} 
          televisao={televisao}
          video={video}
          web={web}
          radio={radio}
          mobile={mobile} 
        />
        </Grid>
      </Grid>
    </div>
  );
}