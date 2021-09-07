import React from 'react';
import logo from '../assets/img/logo.png'

import "./logo.css"

function Logo(props) {
    return ( 
    <aside className="logo">
        <a href="/" className="logo">
            <img src={logo} alt="logo" />
        </a>
    </aside> );
}

export default Logo;  