import React, { Component } from 'react';
import '../sass/styles.scss';
import devdeasWhiteLogo from '../img/DevdeasWhiteLogo.png';

class Home extends Component{
  render(){
    return(
      <div id="home" className="d-flex flex-column flex-lg-row dark">
        <div className="col-12 col-lg-4 d-flex flex-column align-items-center justify-content-center p-3">
          <div className="bordered col-12 p-3 d-flex flex-column align-items-center justify-content-center">
            <img style={{maxWidth:"80%"}} src={devdeasWhiteLogo} alt="Devdeas Logo Light version"/>
            <div className="m-3 p-3 text-center">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quisquam eligendi nobis incidunt nulla similique possimus maxime? Impedit possimus placeat ipsam, consectetur dolorum, quaerat et expedita perferendis odit, asperiores quae?</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-8 d-flex flex-column align-items-center justify-content-center p-3">
          <div className="bordered col-12 p-3">test</div>
        </div>
      </div>
    )
  }
}

export default Home;
