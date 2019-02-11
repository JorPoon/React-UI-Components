import React from 'react';
import './Header.css';
import ImageThumbnail from './HeaderComponents/ImageThumbnail';


const HeaderContainer = () => {
    return (
    <div>
        <ImageThumbnail />
        <HeaderContent />
    </div>
    )
}