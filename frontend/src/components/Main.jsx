import React from 'react';
import "./main.css"
import Header from "./Header"

function Main(props) {
    return ( 
    <React.Fragment>
        <Header {...props}></Header>
        <main className="content">
            Conteudo
        </main>
    </React.Fragment> );
}

export default Main;