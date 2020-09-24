import React, { Component } from 'react';
import * as Icon from 'react-bootstrap-icons';
import Timestamp from 'react-timestamp';
import '../sass/styles.scss';

class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state = {
      ideas: [],
      certified_ideas: [],
      started: "",
      db: ""
    };
  }

  getIdeas(){
    fetch("https://projects-enzoavagliano.fr:9000/ideas")
    .then(res => res.json())
    .then(res => this.setState({
      ideas: res
    }));
  }

  getCertifiedIdeas(){
    fetch("https://projects-enzoavagliano.fr:9000/certified")
    .then(res => res.json())
    .then(res => this.setState({
      certified_ideas: res
    }));
  }

  getUptime(){
    fetch("https://projects-enzoavagliano.fr:9000/start")
    .then(res => res.json())
    .then(res => this.setState({
      started: res
    }));
  }

  getConnection(){
    fetch("https://projects-enzoavagliano.fr:9000/db")
    .then(res => res.text())
    .then(res => this.setState({
      db: res
    }));
  }

  componentWillMount(){
    this.getIdeas();
    this.getCertifiedIdeas();
    this.getUptime();
    this.getConnection();
  }

  componentDidMount(){
    this.interval = setInterval(() => this.setState({ started: this.getUptime() }), 20000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render(){
    return(
      <div id="dashboard" className="mt-5 p-3 col-11 col-lg-7">
        <h2>Service dashboard</h2>

        <div className="d-flex flex-wrap justify-content-around align-items-center">
          <div className="text-center mt-3">
            <h4><Icon.CloudCheckFill/> Status :</h4>
            {
              this.state.db === "OK" &&
              <p>Running</p>
            }
            {
              this.state.db === null &&
              <p>Offline</p>
            }
            {
              this.state.db === "" &&
              <p>Offline</p>
            }
          </div>
          <div className="text-center mt-3">
            <h4><Icon.ClockHistory/> Uptime :</h4>
            {
              this.state.db === "OK" &&
              <p><Timestamp relative autoUpdate date={this.state.started} relativeTo={new Date}/></p>
            }
            {
              this.state.db === null &&
              <p>Offline</p>
            }
            {
              this.state.db === "" &&
              <p>Offline</p>
            }
          </div>
          <div className="text-center mt-3">
            <h4><Icon.Braces/> Total ideas :</h4>
            {
              this.state.db === "OK" &&
              <p>{this.state.ideas.length}</p>
            }
            {
              this.state.db === null &&
              <p>Offline</p>
            }
            {
              this.state.db === "" &&
              <p>Offline</p>
            }
          </div>
          <div className="text-center mt-3">
            <h4><Icon.PatchCheckFll/> Certified ideas :</h4>
            {
              this.state.db === "OK" &&
              <p>{this.state.ideas.length}</p>
            }
            {
              this.state.db === null &&
              <p>Offline</p>
            }
            {
              this.state.db === "" &&
              <p>Offline</p>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
