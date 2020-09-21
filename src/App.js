import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';

import './sass/styles.scss';

import axios from 'axios';

import DevdeasDescritpion from './components/DevdeasDescritpion';
import IdeaList from './components/IdeaList';
import IdeaSubmit from './components/IdeaSubmit';

class App extends Component {
  render(){
    return(
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={props =>
              <div className="dark">
                <DevdeasDescritpion/>
                <IdeaSubmit/>
                <IdeaList/>
              </div>
            }/>

            <Route path="/app" component={props =>
              <div className="dark">
                <DevdeasDescritpion/>
                <IdeaSubmit/>
                <IdeaList/>
              </div>
            }/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
