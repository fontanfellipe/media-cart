import React from 'react';
import ReactPlayer from 'react-player';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const isImage = require('is-image');

import Screenplay from '../assets/play-button.png';

const useStyles = makeStyles(theme => ({
    
  playerWrapper : {
    position: 'relative',
    paddingTop: '56.25%' /* Player ratio: 100 / (1280 / 720) */
  },
   
  reactPlayer : {
    position: 'absolute',
    top: 0,
    left: 0,
    maxHeight: '300px',
    maxWidth: '500px'
  },
  screenplayBox : {
    display: 'flex',
    width: '600px',
    margin: 'auto',
    paddingBottom: '20px'
    
    //height: '140px',
  
   
  },
  img :{
    maxWidth: '100%',
    maxHeight: '100%',
    display: 'block',
}
}));

function MediaScreen(props) {

  const classes = useStyles(); 

    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.screenplayBox}
        >
        {(isImage(props.URL)) ? 
          <img className={classes.img} src={props.URL}/>
          :
          <ReactPlayer 
            url={props.URL} 
            controls={true}  
          />
        }
      </Grid>
      
      
    )
 
}

export default MediaScreen;



{/* <Grid
container
direction="row"
justify="center"
alignItems="center"
className={classes.screenplayBox}
>
{(isImage(props.URL)) ? 
  <Grid
    direction="row"
    justify="center"
    alignItems="center"
    className={classes.screenplayBox}
  >
    <img className={classes.img} src={props.URL}/>
  </Grid> : */}