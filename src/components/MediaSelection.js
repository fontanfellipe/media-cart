import React, { Component, useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';



function MediaSelection(props) {
    const [haveAdd, setHaveAdd] = useState(true);

    const sendData = (e) => {
        props.teste(e.target.value)
        //console.log(e.target.value)
    }

    const handleChangeToFalse = () => {
        setHaveAdd(false);
        console.log(haveAdd);
    }
    const handleChangeToTrue = () => {
        setHaveAdd(true);
        console.log(haveAdd);
    }

    return (
        <div>
            <div>
                <h1>Como será o anúncio</h1>
                <p>Defina o formato do anúncio a ser exibido. Caso o seu anúncio ainda não exista, selecione a opção correspondente abaixo para abançar sem indicar o anúncio</p>
            </div>
            <div>
                <button>Florianópolis</button>
            </div>
                <FormControl component="fieldset">
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
                {haveAdd && <div>
                    <div>
                        <input onChange={sendData}/>
                    </div>
                    <button disabled={props.televisao}>Televisão</button>
                    <button disabled={props.radio}>Rádio</button> 
                    <button disabled={props.video}>Video</button> 
                    <button disabled={props.web}>Web</button> 
                    <button disabled={props.mobile}>Mobile</button>
                </div>}
            </div>
            
            
        </div>
        
    );

    }
    



export default MediaSelection;