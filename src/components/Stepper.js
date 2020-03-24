import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import LooksOneOutlinedIcon from '@material-ui/icons/LooksOneOutlined';
import LooksTwoOutlinedIcon from '@material-ui/icons/LooksTwoOutlined';
import Looks3OutlinedIcon from '@material-ui/icons/Looks3Outlined';

const useStyles = makeStyles(theme => ({
  root: {
    width: '60%',
    justifyContent: 'left,',
    flexGrow: 1,
    margin: 30,
    height: 10

  },
  insideGrid : {
    fontFamily: 'Source Sans Pro , sans-serif',
    fontSize: '50px'
  }
}));

export default function NestedGrid() {
  const classes = useStyles(); 

  function FormRowStep01() {
    return (
      <React.Fragment>
        <Grid 
          item 
          xs={12}
          md={2}
          container
          direction="column"
          justify="center"
          alignItems="flex-start"  
        >
          <LooksOneOutlinedIcon style={{color:'gray'}}/>
        </Grid>
        <Grid 
          item 
          xs={12}
          md={10}
          container
          direction="column"
          justify="center"
          alignItems="flex-start"  
        > 
          <Typography variant='body2'>Negócio e publico alvo</Typography>
        </Grid>
      </React.Fragment>
    );
  }
  function FormRowStep02() {
    return (
      <React.Fragment>
        <Grid 
          item 
          xs={12}
          md={2}
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
        <LooksTwoOutlinedIcon/>
        </Grid>
        <Grid 
          item 
          xs={12}
          md={10}
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          <Typography variant='body2' style={{fontWeight:'800'}}>Anúncio/formato</Typography>
        </Grid>

      </React.Fragment>
    );
  }
  function FormRowStep03() {
    return (
      <React.Fragment>
        <Grid 
          item 
          xs={12}
          md={2}
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
        <Looks3OutlinedIcon style={{color:'gray'}}/>
        </Grid>
        <Grid 
          item 
          xs={12}
          md={10}
          container
          direction="column"
          justify="center"
          alignItems="flex-start"  
        >
          <Typography variant='body2'>Resultado/pagamento</Typography>
      </Grid>
      </React.Fragment>
    );
  }
  return (
    <Grid className={classes.root}>
      <Grid container spacing={0}>
        <Grid 
          container 
          item 
          xs={4} 
          spacing={0}>
          <FormRowStep01 />
        </Grid>
        <Grid 
          container 
          item 
          xs={4} 
          spacing={0}>
          <FormRowStep02 />
        </Grid>
        <Grid 
          container 
          item 
          xs={4} 
          spacing={0}>
          <FormRowStep03 />
        </Grid>
      </Grid>
    </Grid>
  );
}
