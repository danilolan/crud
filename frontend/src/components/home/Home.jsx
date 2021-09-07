import React from 'react';
import Main from '../Main';

function Home(props) {
    return ( 
        <Main icon="home" title="Início" subtitle="Primeiro sistema de cadastro de usuário">
            <div className="title">Bem Vindo!</div>
            <hr/>
            <p className="mb-0">Sistema para exemplificar a construção de um cadastro desenvolvido em React</p>
      </Main>
     );
}

export default Home;