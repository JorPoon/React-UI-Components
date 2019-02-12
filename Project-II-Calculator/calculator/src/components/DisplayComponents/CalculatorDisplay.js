import React from 'react';
import './Display.css';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';

const CalculatorDisplay = () => {
    return (
        <div className="display-container">
            <div className="box">Display Box</div>
            <div className ="button-container">
                <ActionButton className="clear-btn" text="clear" />
                <NumberButton className="division" text="/"/>
            </div>
            <div className ="button-container">
                <NumberButton className="seven" text="7" />
                <NumberButton className="eight" text="8" />
                <NumberButton className="nine" text="9" />
                <NumberButton className="multiplcation" text="*" />
            </div>
            <div className ="button-container">
                <NumberButton className="four" text="4" />
                <NumberButton className="five" text="5" />
                <NumberButton className="six" text="6" />
                <NumberButton className="subtraction" text="-" />
            </div>
            <div className ="button-container">
                <NumberButton className="one" text="1" />
                <NumberButton className="two" text="2" />
                <NumberButton className="three" text="3" />
                <NumberButton className="addition" text="+" />
            </div>
            <div className ="button-container"> 
                <ActionButton className="zero" text="0" />
                <NumberButton className="equal" text="=" />
            </div>
        </div>
    );
};

export default CalculatorDisplay;
