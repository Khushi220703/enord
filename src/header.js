import React from 'react'
import {Link} from "react-router-dom";
import { useRef } from "react";

const header = () => {
  return (
    <div>
      <header>
       <Link to='/' style={{color:"black"}}><h1 id = 'head-logo'>Enord</h1></Link>
       
        <p id='head-p'>Creating ease</p>
       <Link to = "/about" class='head-a'><button id = 'head-about'>About us</button></Link>
       <Link to = "/contact"> <button id = 'head-contact' class="head-a">Contact us</button></Link>
        <hr/>

      </header>
      
     
    </div>
  )
}

export default header
