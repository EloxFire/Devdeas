import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';

import axios from 'axios';

import Home from './components/Home';

class App extends Component {
  render(){
    return(
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={props =>
              <div>
                <Home/>
              </div>
            }/>

            <Route path="/app" component={props =>
              <div>
                <Home/>
              </div>
            }/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
