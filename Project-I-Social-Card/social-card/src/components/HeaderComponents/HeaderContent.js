import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';

const HeaderContent = () => {
    return (
    
        <div className="head-content">

            <HeaderTitle />
            <p> Let's Learn React by building a simple interfaces with components. Don't try to
                overthink it, just keep in simple and have fun. Once you feel comfortable using components 
                you are well on your way on mastering React!</p>
        
        </div>

    );
}

export default HeaderContent;