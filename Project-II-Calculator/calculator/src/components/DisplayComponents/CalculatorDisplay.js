import React from 'react';
import './Display.css';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';

const CalculatorDisplay = () => {
    return (
        <div>
            <div>Display Box</div>
            <ActionButton text="clear" />
            <NumberButton text="/"/>
            <NumberButton text="7" />
            <NumberButton text="8" />
            <NumberButton text="9" />
            <NumberButton text="*" />
            <NumberButton text="4" />
            <NumberButton text="5" />
            <NumberButton text="6" />
            <NumberButton text="-" />
            <NumberButton text="1" />
            <NumberButton text="2" />
            <NumberButton text="3" />
            <NumberButton text="+" />
            <ActionButton text="0" />
            <NumberButton text="=" />
        </div>
    );
};

export default CalculatorDisplay;
