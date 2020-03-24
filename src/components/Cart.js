import React, { Component } from 'react';
import GridCart from './GridCart';
import Stepper from './Stepper';


class Cart extends Component {
    render() {
        return (
            <div style={{margin: 0, padding: 0}}>
                <Stepper/>
                <GridCart/>
            </div>
        );
    }
}

export default Cart;


