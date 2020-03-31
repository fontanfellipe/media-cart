import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Typography } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { FilledInput } from '@material-ui/core';
import { faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import InputAdornment from '@material-ui/core/InputAdornment';
import { FormHelperText } from '@material-ui/core';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import Button from '@material-ui/core/Button';

import Screenplay from '../assets/play-button.png';
import MediaScreen from './MediaScreen';

const useStyles = makeStyles(theme => ({
    wrapDiv: {
        justifyContent: 'left,',
        background: '#f0f0f0',
        margin: 0,
        padding: 50
    },
    spacing15 : {
        marginBottom: 15
    },
    spacing20: {
        marginBottom: 20
    },
    spacing30: {
        marginBottom: 30,
        position: 'relative'
    },
    location: {
        marginBottom: 30,
        display:'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },
    inputLocation: {
        background: '#e0e0e0',
        width:'120px',
        fontFamily: 'Source Sans Pro , sans-serif',
        fontSize: '14px',
        fontWeight: 600,
        height: '30px',
        marginLeft: '15px',
        paddingBottom: '15px',
    },
    inputMedia: {
        background: '#e0e0e0',
        fontFamily: 'Source Sans Pro , sans-serif',
        fontSize: '14px',
        fontWeight: 600,
        height: '45px',
        paddingTop:0
    },
    mediaButtons: {
        display : 'flex',
        width: '480px',
        justifyContent: 'space-around',
        marginBottom: '30px'
        },
    mediaButton: {
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
    },
    disableMediaButton: {
        color: '#898989',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontFamily: 'Source Sans Pro , sans-serif',
        fontSize: '13px',
        fontWeight:'800', 
        height: '30px', 
        paddingLeft: '10px',
        background:'#e0e0e0',
    },
    endButton: {
        display: 'flex',
        justifyContent: 'center'
    },
    backButton: {
        color: '#898989',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontFamily: 'Source Sans Pro , sans-serif',
        fontWeight:'600', 
        fontSize: '12px',
        letterSpacing: '1px',
        margin: '5px',
        height: '30px',
        width: '80px',
    },
    nextButton: {
        background: '#130040',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontFamily: 'Source Sans Pro , sans-serif',
        fontWeight:'400', 
        fontSize: '12px',
        letterSpacing: '1px',
        margin: '5px',
        height: '30px',
        width: '80px',
    }
}));

function MediaSelection(props) {
    const classes = useStyles(); 

    const [haveAdd, setHaveAdd] = useState(true); //radio buttons state
    const [URL, setURL] = useState(Screenplay);//image placeholder player;

    //
    const sendData = (e) => {
        props.turnOnButtons(e.target.value);
        //setURL(e.target.value);
    }
    const sendURL = (e) => {
        setURL(e.target.value)
        console.log(URL);
    }
    // radio button funcionality
    const handleChangeToFalse = () => {
        setHaveAdd(false);
    }
    const handleChangeToTrue = () => {
        setHaveAdd(true);
        console.log(haveAdd);
    }

    return (
        <div className={classes.wrapDiv}>
            <div >
                <Typography className={classes.spacing15} variant="h4">Como será o anúncio?</Typography>
                <Typography className={classes.spacing30} variant="body2">Defina o formato do anúncio a ser exibido. Caso o seu anúncio ainda não exista, selecione a opção correspondente abaixo para abançar sem indicar o anúncio</Typography>
            </div>
            <div className={classes.location}>
                <LocationOnIcon style={{color:'#898989'}}/>
                <FilledInput
                    className={classes.inputLocation}
                    value="Florianópolis"
                    disableUnderline={true}
                />
            </div>
            <FormControl className={classes.spacing30} component="fieldset">
                <RadioGroup row aria-label="position" name="position" defaultValue="top">
                    <FormControlLabel 
                        value="Configurar meu anúncio agora" 
                        onChange={handleChangeToTrue}
                        control={<Radio color="primary" />} 
                        label="Configurar meu anúncio agora" 
                    />
                    <FormControlLabel 
                        value="Ainda não tenho anúncio" 
                        onChange={handleChangeToFalse}
                        control={<Radio color="primary" />} 
                        label="Ainda não tenho anúncio" />
                </RadioGroup>
            </FormControl>
            <div>
                {/* conditional rendering onChange by radio button */}
                {
                haveAdd && 
                    <div>
                        
                        <div className={classes.spacing30}>
                            <FilledInput
                                type="text"
                                onChange={ e => {sendData(e); sendURL(e) }}
                                //onChange={sendURL}
                                className={classes.inputMedia}
                                disableUnderline={true}
                                fullWidth={true}
                                startAdornment={<InputAdornment position="start"><FontAwesomeIcon color='#898989' icon={faPlus}/></InputAdornment>}
                                placeholder="URL do anúncio/criativo/material"
                                inputProps={{
                                    style:{ marginBottom: '15px'}
                                }}
                            />
                            <FormHelperText style={{marginLeft:"15px"}}>Formatos aceitos: Video, Áudio, Imagem</FormHelperText>
                        </div>
                        <div >
                            <Typography className={classes.spacing20} variant="h6">Mídias disponíveis para o seu anúncio</Typography>
                        </div >                   
                        <div className={classes.mediaButtons}>
                            <PermMediaIcon style={{color:'#898989'}}/>
                            <Button
                            className={classes.mediaButton}
                            classes={{disabled: classes.disableMediaButton}}
                            endIcon={<FontAwesomeIcon style={{fontSize: '14px'}} icon={faTimesCircle} />}
                            disabled={props.televisao}
                            >        
                                Televisão
                            </Button>
                            <Button
                            className={classes.mediaButton}
                            classes={{disabled: classes.disableMediaButton}}
                            endIcon={<FontAwesomeIcon style={{fontSize: '14px'}} icon={faTimesCircle} />}
                            disabled={props.radio}
                            >        
                                Rádio
                            </Button>
                            <Button
                            className={classes.mediaButton}
                            classes={{disabled: classes.disableMediaButton}}
                            endIcon={<FontAwesomeIcon style={{fontSize: '14px'}} icon={faTimesCircle} />}
                            disabled={props.video}
                            >        
                                Video
                            </Button>
                            <Button
                            className={classes.mediaButton}
                            classes={{disabled: classes.disableMediaButton}}
                            endIcon={<FontAwesomeIcon style={{fontSize: '14px'}} icon={faTimesCircle} />}
                            disabled={props.web}
                            >        
                                Web
                            </Button>
                            <Button
                            className={classes.mediaButton}
                            classes={{disabled: classes.disableMediaButton}}
                            endIcon={<FontAwesomeIcon style={{fontSize: '14px'}} icon={faTimesCircle} />}
                            disabled={props.mobile}
                            >        
                                Mobile
                            </Button>
                        </div>
                        <div className={classes.spacing20}>
                            <Typography className={classes.Spacing20} variant="h6">Confira seu anúncio</Typography>
                        </div>
                        <div>
                            <MediaScreen
                                URL={URL}
                                //isImage={props.isImage()}
                            />
                        </div>
                        <div className={classes.endButton}>
                            <Button 
                                className={classes.backButton} 
                                variant="contained"
                            >
                                VOLTAR
                            </Button>
                            <Button 
                                className={classes.nextButton} 
                                variant="contained"
                            >
                                PRÓXIMO
                            </Button>
                        </div>            
                    </div>
                    }
            </div>
        </div>
    );
}

export default MediaSelection;