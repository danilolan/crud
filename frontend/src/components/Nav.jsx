import React from 'react';
import "./nav.css"
import NavItem from './NavItem';

function Nav(props) {
    return ( 
    <aside className="menu">
        <NavItem className="NavItem" href="/" icon="fa fa-home" label="Início"></NavItem>
        <NavItem className="NavItem" href="/users" icon="fa fa-users" label="Usuários"></NavItem>
    </aside> );
}

export default Nav;