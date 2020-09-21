import React, {Component} from 'react';
import '../sass/styles.scss';

class DevdeasDescritpion extends Component{
  render(){
    return(
      <div id="devdeasDescription" className="container">
        <div className="titleContainer pt-2 col-12 text-center">
          <h1 className="devdeasMainTitle"><span>&#60;</span><span>&#47;</span>Devdeas<span>&#62;</span><span className="beta">Bêta</span></h1>
          <p className="devdeasMainSubtitle">Share and develop your coding ideas !</p>
        </div>

        <div className="description bordered d-flex flex-column">
          <div className="mb-3">
            <h3>What is this place ?</h3>
            <p>
              <span className="devdeasTitle"><span>&#60;</span><span>&#47;</span>Devdeas<span>&#62;</span></span> is a sharing platform where anyone can share an idea and where any developer can make it grow.
              <br/>
              You'll be able to follow all the process of developement of each idea and in future updates a dedicated chat space will be avilable in order to comment / debate on functionalities, knowledge, etc..
            </p>
          </div>

          <div>
            <h3>What are the rules ?</h3>
            <ul>
              <li>Dont't submit <span className="rulesImportant">offensive ideas</span></li>
              <li><span className="rulesImportant">Be polite</span> during comments / debates</li>
              <li>More importantly : <span className="rulesImportant">Have fun !</span></li>
            </ul>
          </div>

          {/*<h6 className="warning">WARNING : During the beta, https is not available, please go to <a href="http://enzoavagliano.fr/devdeas">this link</a> to submit your ideas.</h6>*/}
        </div>

      </div>
    )
  }
}

export default DevdeasDescritpion;
