import './App.css';
import React from 'react';
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Logo from '../components/Logo';
import Home from '../components/home/Home';
import UserCrud from '../components/User/UserCrud';
import Nav from '../components/Nav';
import Footer from '../components/Footer';


export default function App() {
  return (
    <div className="app">
      <Logo></Logo>
      <Home/>
      <Nav></Nav>
      <Footer></Footer>
    </div>
  );
}
