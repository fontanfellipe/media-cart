import React from 'react';
import Grid from '@material-ui/core/Grid';
import MediaSelection from './MediaSelection';
import Sider from './Sider';

function GridCartUI(props) {
    return (
        <div >
            <Grid 
            container
            direction='row'
            spacing={0}
            >
                <Grid item sm={12} md={8} lg={10}>
                    <MediaSelection 
                        turnOnButtons={props.turnOnButtons}
                        input={props.input} 
                        televisao={props.televisao}
                        video={props.video}
                        web={props.web}
                        radio={props.radio}
                        mobile={props.mobile}
                        isImage={props.isImage}
                    />
                </Grid>
                <Grid item sm={12} md={4} lg={2}>
                <Sider
                    input={props.input} 
                    televisao={props.televisao}
                    video={props.video}
                    web={props.web}
                    radio={props.radio}
                    mobile={props.mobile} 
                />
                </Grid>
            </Grid>
      </div>
    )
}


export default GridCartUI

