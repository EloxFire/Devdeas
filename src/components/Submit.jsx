import React, { Component } from 'react';
import axios from 'axios';

class Submit extends Component{
  constructor(props){
    super(props);
    this.state = {
      database: "",
      ideaName: "",
      ideaAuthor: "",
      ideaDescription: "",
      ideaLanguages: "",
      ideaKeywords: "",
    };

    this.handleChangeIdeaName = this.handleChangeIdeaName.bind(this);
    this.handleChangeIdeaLang = this.handleChangeIdeaLang.bind(this);
    this.handleChangeIdeaDesc = this.handleChangeIdeaDesc.bind(this);
    this.handleChangeIdeaKeywords = this.handleChangeIdeaKeywords.bind(this);
    this.handleChangeIdeaAuthor = this.handleChangeIdeaAuthor.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeIdeaName(e) {
    this.setState({
        ideaName: e.target.value
    });
    console.log('onChange Name : ', this.state.ideaName);
  }

  handleChangeIdeaLang(e) {
    this.setState({
        ideaLanguages: e.target.value
    });
    console.log('onChange languages : ', this.state.ideaLanguages);
  }

  handleChangeIdeaDesc(e) {
    this.setState({
        ideaDescription: e.target.value
    });
    console.log('onChange desc : ', this.state.ideaDescription);
  }

  handleChangeIdeaKeywords(e) {
    this.setState({
        ideaKeywords: e.target.value
    });
    console.log('onChange keywords : ', this.state.ideaKeywords);
  }

  handleChangeIdeaAuthor(e) {
    this.setState({
        ideaAuthor: e.target.value
    });
    console.log('onChange author : ', this.state.ideaAuthor);
  }

  handleSubmit(e){
    e.preventDefault();

    let idea = {
      name: this.state.ideaName,
      author: this.state.ideaAuthor,
      description: this.state.ideaDescription,
      lang: this.state.ideaLanguages,
      keywords: this.state.ideaKeywords
    };
    console.log(idea);

    axios.post('https://projects-enzoavagliano.fr:9000/add', idea)
      .then(res => console.log("data sent"))
      .catch(err => console.log(err.data));


    setTimeout(
      function() {
        window.location.reload(false);
      }
      .bind(this),
      500
    );
  }

  database_connexion() {
    fetch("https://projects-enzoavagliano.fr:9000/getconnection")
    .then(res => res.text())
    .then(res => this.setState({ dbResponse: res }));
    console.log(this.state.database);
  }

  componentWillMount() {
      this.database_connexion();
  }


  render(){
    return(
      <div id="submitidea" className="mt-5 p-3 col-11 col-lg-7">
        <h2>Submit your idea</h2>

        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="userName">Author <span className="form-alt">(Anonymous if null)</span></label>
              <input onChange={this.handleChangeIdeaAuthor} type="text" className="form-control" id="userName" placeholder="What's your name ?"/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="ideaName">Idea name <span className="form-alt">Required</span></label>
              <input onChange={this.handleChangeIdeaName} type="text" className="form-control" id="ideaName" placeholder="Give a name to your idea."/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="ideaDescription">Idea description <span className="form-alt">Required</span></label>
            <textarea onChange={this.handleChangeIdeaDesc} className="form-control" id="ideaDescription" rows="6" placeholder="Describe your idea, with the most details you can give."></textarea>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="ideaLangs">Idea Languages <span className="form-alt">(If multiple : Separe by comma " , " without spaces)</span></label>
              <input onChange={this.handleChangeIdeaLang} type="text" className="form-control" id="ideaLangs" placeholder="HTML,ReatJS,C++,Java,Ruby,Python"/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="ideaKeywords">Idea Keywords <span className="form-alt">(If multiple : Separe by comma " , " without spaces)</span></label>
              <input onChange={this.handleChangeIdeaKeywords} type="text" className="form-control" id="ideaKeywords" placeholder="PWA,Sharing,Community,Automation"/>
            </div>
          </div>
          <button type="submit" className="col-md-12 btn btn-success">Submit your idea !</button>
        </form>
      </div>
    )
  }
}

export default Submit;
