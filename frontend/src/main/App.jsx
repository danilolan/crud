import './App.css';
import React from 'react';
import Logo from '../components/Logo';
import Main from '../components/Main';
import Nav from '../components/Nav';
import Footer from '../components/Footer';


export default function App() {
  return (
    <div className="App">
      <Logo></Logo>
      <Main></Main>
      <Nav></Nav>
      <Footer></Footer>
    </div>
  );
}
