import React, { Component } from 'react';


function Sider(props) {
    return (
        <div>
            <div>
                <button disabled={props.televisao}>Televisão</button>
                <button disabled={props.radio}>Rádio</button> 
                <button disabled={props.video}>Video</button> 
                <button disabled={props.web}>Web</button> 
                <button disabled={props.mobile}>Mobile</button>
            </div>
        </div>
    );
}


export default Sider;
