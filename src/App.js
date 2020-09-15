import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import './sass/styles.scss';

import devdeasWhiteLogo from './img/DevdeasWhiteLogo.png';

function App() {
  return (
    <div id="devdeas" className="d-flex flex-column dark">
      <div className="container text-center pt-3">
        <img style={{maxWidth:"35%"}} src={devdeasWhiteLogo} alt="Devdeas's logo light version"/>
      </div>
      <div className="dashboard container p-3">
        <div className="col-12 d-flex flex-column justify-content-center align-items-center p-3 statusBoard">
          <h1>Dashbord</h1>
          <div className="col-12 d-flex flex-wrap justify-content-around">
            <div className="serviceStatus d-flex flex-row">
              <p className="p-0 m-0"><Icon.GearFill/> Status :</p>
            </div>
            <div className="serviceStatus d-flex flex-row">
              <p className="p-0 m-0"><Icon.Braces/> Submited ideas :</p>
            </div>
            <div className="serviceStatus d-flex flex-row">
              <p className="p-0 m-0"><Icon.PatchCheckFll/> Certified Ideas :</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
