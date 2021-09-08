import React, { Component } from 'react';
import Main from '../Main';

const headerProps = {
    icon: 'user',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}

class UserCrud extends React.Component {
    render() { 
        return (
        <Main {...headerProps}>
            Usuários
        </Main>
        )}
}
 
export default UserCrud;