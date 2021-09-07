import React from 'react';
import "./header.css"

function Header(props) {
    return ( 
    <header className="header d-none d-sm-flex flex-column">
        <h1 className="mt-3">
            <i className={`fa fa-${props.icon}`}> </i> 
            <span> </span>{props.title}</h1>
        <p>{props.subtitle}</p>
    </header> );
}

export default Header;