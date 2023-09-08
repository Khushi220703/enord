import React from 'react'
import {Link} from "react-router-dom";
import { useRef } from "react";


const home = () => {
  return (
    <div id='home'>
     <h1 id='home-greet'>Welcome to Enord!</h1>
     <p  id='home-p'>India's first drone company</p>
     <Link to='/menu' ><button id='home-button'  >Click me explore our products</button></Link>
     
    </div>
  )
}

export default home
