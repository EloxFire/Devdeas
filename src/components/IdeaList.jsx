import React, { Component } from 'react';
import '../sass/styles.scss';


class IdeaList extends Component {

  constructor(props){
    super(props);
    this.state = {
      fetchedIdea: []
    };
  }

  getIdeas(){
    fetch("https://projects-enzoavagliano.fr:9000/ideas")
    .then(res => res.json())
    .then(res => this.setState({
      fetchedIdea: res
    }));
  }

  componentWillMount(){
    this.getIdeas();
  }

  render(){
    return(
      <div id="ideaList" className="container mb-5">
        <h1 className="ml-5 devdeasTitle"><span>&#60;</span><span>&#47;</span>Develop<span>&#62;</span></h1>
        {/*<p className="ml-5">Here you can start developping an idea, share your progress and get help !</p>*/}
        <p className="ml-5">Here you can see all ideas that have already been shared.</p>

        <div className="bordered">
          <div className="ideaContainer d-flex flex-column flex-xs-column flex-sm-column flex-md-row flex-lg-row">
            {this.state.fetchedIdea.map(function(item, index){
              return(
                <div key={index} className="card col-11 col-xs-11 col-sm-11 col-md-3 col-lg-3 m-2">
                  <div className="card-body">
                    <h5 className="card-title mb-n1">{item.name}</h5>
                    <span className="badge badge-primary mr-1 mt-1">Submited by : {item.author}</span>
                    <hr/>
                    <div className="cardBadges d-flex flex-wrap">
                      {item.lang === null &&
                        <span className="badge badge-primary mr-1 mt-1 mb-1">No language</span>
                      }
                      {item.lang === "" &&
                        <span className="badge badge-primary mr-1 mt-1 mb-1">No language</span>
                      }
                      {
                        item.lang.split(',').map(function(lang, n){
                          return(
                            <span key={n} className="badge badge-primary mr-1 mt-1 mb-1">{lang}</span>
                          )
                        })
                      }
                    </div>
                    <div className="cardTextBody">
                      {item.description === null &&
                        <p className="card-text">No description.</p>
                      }
                      {item.description === "" &&
                        <p className="card-text">No description.</p>
                      }
                      <p className="card-text">{item.description}</p>
                    </div>
                    <div className="keywordsContainer mt-3">
                      {
                        item.keywords === "" &&
                        <span className="badge badge-primary mr-1 mt-1 mb-1">No keywords</span>
                      }
                      {
                        item.keywords === null &&
                        <span className="badge badge-primary mr-1 mt-1 mb-1">No keywords</span>
                      }
                      {
                        item.keywords.split(',').map(function(key, nb){
                          return(
                            <span key={nb} className="badge badge-primary mr-1 mt-1 mb-1">{key}</span>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>


      </div>
    )
  }
}

export default IdeaList;
