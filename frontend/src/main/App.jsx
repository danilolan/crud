import './App.css';
import React from 'react';
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Logo from '../components/Logo';
import Main from '../components/Main';
import Nav from '../components/Nav';
import Footer from '../components/Footer';


export default function App() {
  return (
    <div className="app">
      <Logo></Logo>
      <Main icon="home" title="Início" subtitle="Primeiro sistema de cadastro de usuário"></Main>
      <Nav></Nav>
      <Footer></Footer>
    </div>
  );
}
