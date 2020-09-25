import React, { Component } from 'react';
import * as Icon from 'react-bootstrap-icons';

class List extends Component{
  constructor(props){
    super(props);
    this.state = {
      ideas: [],
      certified_ideas: [],
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
    // this.getNonCertifiedIdeas();
  }

  render(){
    return(
      <div id="submitedideas" className="mt-5 mb-5 p-3 col-11 col-lg-7">
        <h2>Already submited ideas</h2>

        <div className="ideaList d-flex flex-column flex-lg-row">
          {
            this.state.ideas.length === 0 &&
            <p>No ideas were submited yet.</p>
          }
          {
            this.state.ideas.map(function(item, index){
              return(
                <div key={index} className="card card col-11 col-xs-11 col-sm-11 col-md-11 col-lg-3 m-2 m-2" style={{color:"black"}}>
                  <div className="card-body" style={{height:"50px",overflowY:"auto"}}>
                    <h5 className="card-title">
                      {
                        item.certified === 1 &&
                        <span><Icon.PatchCheckFll size={15} color="#FCFCFC"/> </span>
                      }
                      {item.name}
                    </h5>
                  </div>
                  <div className="card-body" style={{height:"40px"}}>
                    <span className="badge badge-primary mr-1 mt-1 mb-1" style={{color:"#FCFCFC"}}>By {item.author}</span>
                  </div>
                  <div className="card-body">
                    {
                      item.lang.split(',').map(function(lang, n){
                        return(
                          <span key={n} className="badge badge-primary mr-1 mt-1 mb-1">{lang}</span>
                        )
                      })
                    }
                    {item.lang === null &&
                      <span className="badge badge-primary mr-1 mt-1 mb-1">No language</span>
                    }
                    {item.lang === "" &&
                      <span className="badge badge-primary mr-1 mt-1 mb-1">No language</span>
                    }
                  </div>
                  <div className="card-body" style={{overflow:"auto", height:"20vh"}}>
                    {item.description === null &&
                      <p className="card-text">No description.</p>
                    }
                    {item.description === "" &&
                      <p className="card-text">No description.</p>
                    }
                    <p className="card-text">{item.description}</p>
                  </div>
                  <div className="card-footer">
                    {
                      item.keywords.split(',').map(function(keyword, n){
                        return(
                          <span key={n} className="badge badge-primary mr-1 mt-1 mb-1">{keyword}</span>
                        )
                      })
                    }
                    {item.keywords === null &&
                      <span className="badge badge-primary mr-1 mt-1 mb-1">No keywords</span>
                    }
                    {item.keywords === "" &&
                      <span className="badge badge-primary mr-1 mt-1 mb-1">No keywords</span>
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default List;
