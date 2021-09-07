import React from 'react';
import "./main.css"
import Header from "./Header"

function Main(props) {
    return ( 
    <React.Fragment>
        <Header {...props}></Header>
        <main className="content">
            <div className="mt-3 p-3">
                {props.children}
            </div>
        </main>
    </React.Fragment> );
}

export default Main;