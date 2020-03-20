import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MediaSelection from './MediaSelection';
import Sider from './Sider';

const isAudio = require('is-audio');
const isImage = require('is-image');
const isVideo = require('is-video');

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const [televisao, setTelevisao] = useState(true);
  const [radio, setRadio] = useState(true);
  const [video, setVideo] = useState(true);
  const [web, setWeb] = useState(true);
  const [mobile, setMobile] = useState(true);
  const [input, setInput] = useState(true);

  const classes = useStyles();

  const teste = (e) => {
    setTelevisao(!isVideo(e));
    setRadio(!isAudio(e));
    setVideo(!isVideo(e));
    setWeb(!isVideo(e) && !isImage(e));
    setMobile(!isImage(e) && !isVideo(e));
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={10}>
          <MediaSelection 
            teste={teste}
            input={input} 
            televisao={televisao}
            video={video}
            web={web}
            radio={radio}
            mobile={mobile} 
          />
        </Grid>
        <Grid item xs={12} sm={2}>
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