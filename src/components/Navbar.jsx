import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import '../sass/navbar.scss';
import devdeasLogo from '../img/devdeasLogo.png';
import burgerMenuIcon from "../img/burgerMenuIcon.svg";

class Navbar extends Component{
  render(){
    return(
      <nav className="navbar navbar-expand-lg sticky-top">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/home">
          <img src={devdeasLogo} height="35" className="d-inline-block align-top" alt="Blinxon's Logo"/>
        </a>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item mr-2">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item mr-2">
              <a className="nav-link" href="#submit">Submit idea</a>
            </li>
            <li className="nav-item mr-2">
              <a className="nav-link" href="#submited">Submited ideas</a>
            </li>
            <li className="nav-item mr-2">
              <a className="nav-link" href="https://enzoavagliano.fr">Website</a>
            </li>
            <li className="nav-item mr-2">
              <a className="nav-link" href="https://enzoavagliano.fr/contact">Contact me</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
