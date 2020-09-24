import React, { Component } from 'react';

class List extends Component{
  constructor(props){
    super(props);
    this.state = {
      ideas: [],
    }
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

  getNonCertifiedIdeas(){
    fetch("https://projects-enzoavagliano.fr:9000/non-certified")
    .then(res => res.json())
    .then(res => this.setState({
      non_certified_ideas: res
    }));
  }

  componentWillMount(){
    this.getIdeas();
    this.getCertifiedIdeas();
    this.getNonCertifiedIdeas();
  }

  render(){
    return(
      <div id="submitedideas" className="mt-5 mb-5 p-3 col-11 col-lg-7">
        <h2>Already submited ideas</h2>

        <div style={{overflowX:"scroll",height:"40vh"}}>
          {}
        </div>
      </div>
    )
  }
}

export default List;
