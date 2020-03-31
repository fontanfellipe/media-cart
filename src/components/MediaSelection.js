import React, { useState } from 'react';

import Screenplay from '../assets/play-button.png';
import MediaSelectionUI from './MediaSelectionUI';

function MediaSelection(props) {

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
       <MediaSelectionUI
            sendData={sendData}
            sendURL={sendURL}
            handleChangeToFalse={handleChangeToFalse}
            handleChangeToTrue={handleChangeToTrue}
            haveAdd={haveAdd}
            URL={URL}
            televisao={props.televisao}
            video={props.video}
            web={props.web}
            radio={props.radio}
            mobile={props.mobile}
            isImage={props.isImage}
       />
    );
}

export default MediaSelection;