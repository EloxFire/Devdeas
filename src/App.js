import React, { Component } from 'react';
import * as Icon from 'react-bootstrap-icons';
import './sass/styles.scss';

import devdeasWhiteLogo from './img/DevdeasWhiteLogo.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedIdea: [],
      serviceStatus: "",
      certifiedIdeas: [],
    };
  }

  getIdeas(){
    fetch("https://projects.enzoavagliano.fr:9000/ideas")
    .then(res => res.json())
    .then(res => this.setState({
      fetchedIdea: res
    }));
  }

  getServiceStatus(){
    fetch("https://projects.enzoavagliano.fr:9000/db")
    .then(res => res.text())
    .then(res => this.setState({
      serviceStatus: res
    }));
  }

  getCertifiedIdeas(){
    fetch("https://projects.enzoavagliano.fr:9000/certified")
    .then(res => res.json())
    .then(res => this.setState({
      certifiedIdeas: res
    }));
  }

  componentWillMount(){
    this.getIdeas();
    this.getServiceStatus();
    this.getCertifiedIdeas();
  }

  render(){
    return (
      <div id="devdeas" className="d-flex flex-column dark">
        <div className="container text-center pt-3">
          <img style={{maxWidth:"35%"}} src={devdeasWhiteLogo} alt="Devdeas's logo light version"/>
        </div>
        <div className="dashboard container p-3">
          <div className="col-12 d-flex flex-column justify-content-center align-items-center p-3 status-board">
            <h1>Dashbord</h1>
            <div className="col-12 d-flex flex-wrap justify-content-around">
              <div className="serviceStatus d-flex flex-row">
                <p className="p-0 m-0">
                  <Icon.GearFill/> Status :
                  {this.state.serviceStatus === "ERROR" && <span style={{fontWeight:"bold",color:"#9146FF"}}> Offline</span>}
                  {this.state.serviceStatus === 'OK' && <span style={{fontWeight:"bold",color:"#9146FF"}}> Online</span>}
                </p>
              </div>
              <div className="serviceStatus d-flex flex-row">
                <p className="p-0 m-0"><Icon.Braces/> Submited ideas : <span style={{fontWeight:"bold",color:"#9146FF"}}>{this.state.fetchedIdea.length}</span></p>
              </div>
              <div className="serviceStatus d-flex flex-row">
                <p className="p-0 m-0">
                  <Icon.PatchCheckFll/> Certified Ideas :
                  <span style={{fontWeight:"bold",color:"#9146FF"}}> {this.state.certifiedIdeas.length}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="submit-center container pt-3">
          <div className="col-12 d-flex flex-column justify-content-center align-items-center p-3 submit-form">
            <h1>Submit form</h1>
            <div className="col-12 d-flex flex-wrap justify-content-around">
              <p>test</p>
              <p>test2</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
