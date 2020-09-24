import React, { Component } from 'react';

class Description extends Component{
  render(){
    return(
      <div id="description" className="mt-5 p-3 col-11 col-lg-7">
        <h2>What is this place ?</h2>
        <p>
          <span className="devdeasTitle"><span>&#60;</span><span>&#47;</span>Devdeas<span>&#62;</span></span> is a sharing platform where anyone can share an idea and where any developer can make it grow. You'll be able to follow all the process of developement of each idea and in future updates a dedicated chat space will be avilable in order to comment / debate on functionalities, knowledge, etc..
        </p>

        <h2>What are the rules ?</h2>
        <ul>
          <li>Don't submit <span style={{color:"#e64c3c"}}>offensive ideas</span></li>
          <li><span style={{color:"#e64c3c"}}>Be polite</span>, and respect others</li>
          <li>But first of all : <span style={{color:"#e64c3c"}}>have fun !</span></li>
        </ul>
      </div>
    )
  }
}

export default Description;
