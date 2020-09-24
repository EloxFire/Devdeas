import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Description from './components/Description';
import Submit from './components/Submit';

class App extends Component {
  render(){
    return(
      <div>
        <Router>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={props =>
              <div id="devdeas" className="d-flex flex-column align-items-center">
                <Dashboard/>
                <Description/>
                <Submit/>
              </div>
            }/>

            <Route path="/app" component={props =>
              <div id="devdeas" className="d-flex flex-column align-items-center">
                <Dashboard/>
                <Description/>
                <Submit/>
              </div>
            }/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
