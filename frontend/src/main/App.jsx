import './App.css';
import React from 'react';
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes';

import Logo from '../components/Logo';
import Nav from '../components/Nav';
import Footer from '../components/Footer';


export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Logo></Logo>
        <Routes/>
        <Nav></Nav>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}
