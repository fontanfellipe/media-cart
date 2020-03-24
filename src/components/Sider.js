import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PeopleIcon from '@material-ui/icons/People';
import Grid from '@material-ui/core/Grid';
import { FormHelperText } from '@material-ui/core';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import Button from '@material-ui/core/Button';
import { faTimesCircle} from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(theme => ({
    root: {
        background:'#e2e1e7', 
        height:'100%',
        margin:0,
        },
    mediaButtonSider: {
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontFamily: 'Source Sans Pro , sans-serif',
        fontSize: '13px',
        fontWeight:'800', 
        height: '30px', 
        paddingLeft: '10px',
        background:'white',
        margin: '3px'
    },
    buttonsGrid : {
        padding: '20px'       
    }
}));

function Sider(props) {
    const classes = useStyles(); 
    return (
        <Grid className={classes.root} >
            <Grid
                container
                direction="row"
                justify="space-around"
                style={{padding:'30px 30px 20px 30px', }}
            >
                <Grid
                    item xs={6}
                    container
                    direction="column"
                    justify="center"
                    alignItems="flex-start"
                >
                    <PeopleIcon/>
                </Grid>
                <Grid
                    item xs={6}
                    container
                    direction="column"
                    justify="center"
                    alignItems="flex-end"
                >
                    <Typography 
                        style={{
                            textAlign:'center', 
                            paddingRight:'15px' 
                        }} 
                        variant="h5"
                    >
                        477.798
                    </Typography>
                    <Typography
                        style={{
                            textAlign:'center', 
                            paddingRight:'10px',
                            color: '#898989' 
                        }} 
                        variant="body1"
                    >
                        pessoas por mês
                    </Typography>
                </Grid>
            </Grid>
                <Typography 
                    style={{
                        margin:'0px 30px 20px 30px', 
                        color: '#898989'
                    }} 
                    variant="body1">
                    Estimativas baseadas na audiência dos locais selecionados para todos os tipos de mídia disponíveis.
                    O tamanhodo público-alvo não interfere no valor do seu custo
                </Typography>
            
            <Divider/>
            <Grid
                container
                direction="row"
                justify="space-around"
                style={{padding:'20px 30px 20px 30px', }}
            >
                <Grid
                    item xs={6}
                    container
                    direction="column"
                    justify="center"
                    alignItems="flex-start"
                >
                    <PermMediaIcon/>
                </Grid>
                <Grid
                    item xs={6}
                    container
                    direction="column"
                    justify="center"
                    alignItems="flex-end"
                >
                    <Typography style={{textAlign:'center', }} variant="h5">mídias</Typography>
                </Grid>
            </Grid>
            <Grid
                container
                direction="row"
                className={classes.buttonsGrid}
            >
                <Button
                    className={classes.mediaButtonSider}
                    endIcon={<FontAwesomeIcon 
                        style={{
                            fontSize: '14px', 
                            color:'#e0e0e0'
                        }} 
                        icon={faTimesCircle} />}
                    >        
                    Televisão
                </Button>
                <Button
                    className={classes.mediaButtonSider}
                    endIcon={<FontAwesomeIcon 
                    style={{
                        fontSize: '14px', 
                        color:'#e0e0e0'
                    }} 
                    icon={faTimesCircle} />}
                >        
                Rádio
                </Button>
                <Button
                    className={classes.mediaButtonSider}
                    endIcon={<FontAwesomeIcon 
                    style={{
                        fontSize: '14px', 
                        color:'#e0e0e0'
                    }} 
                    icon={faTimesCircle} />}
                >        
                Video
                </Button>
                <Button
                    className={classes.mediaButtonSider}
                    endIcon={<FontAwesomeIcon 
                    style={{
                        fontSize: '14px', 
                        color:'#e0e0e0'
                    }} 
                    icon={faTimesCircle} />}
                >        
                Web
                </Button>
                <Button
                    className={classes.mediaButtonSider}
                    endIcon={<FontAwesomeIcon 
                    style={{
                        fontSize: '14px', 
                        color:'#e0e0e0'
                    }} 
                    icon={faTimesCircle} />}
                >        
                Mobile
                </Button>
            </Grid>
            
            <Divider/>
            
        </Grid>
    );
}

export default Sider;


 