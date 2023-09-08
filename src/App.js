import logo from './logo.svg';
import './App.css';
import Header from './header.js'
import Footer from './footer.js'
import Contact from './contact.js'
import About from './about.js'
import Home from "./home.js"
import Menu from "./menu.js"
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
 
  
} from "react-router-dom";


function App() {
  return (
    <>
  <BrowserRouter>
    <Header/>
    <Routes>
    <Route exact path="/" element = {<Home />}></Route>
    <Route exact path="/about" element = {<About />}></Route>
    <Route exact path="/contact" element = {<Contact />}></Route>
    <Route exact path="/menu" element = {<Menu />}></Route>
   
    </Routes>
    <Footer/>
  </BrowserRouter>
   
   
   
   </>
   
  );
}

export default App;
