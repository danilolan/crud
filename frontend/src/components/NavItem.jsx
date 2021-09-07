import React from 'react';
import './navItem.css'

function NavItem(props) {
    return ( 
    <div className="NavItem">
        <a href={props.href}>
            <i className={props.icon}></i> {props.label}
        </a>
    </div> );
}

export default NavItem;