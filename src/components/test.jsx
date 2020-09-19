constructor(props) {
  super(props);
  this.state = {
    fetchedIdea: [],
    serviceStatus: "",
    certifiedIdeas: [],
    ideaName: "",
    ideaLang: "",
    ideaDesc: "",
    ideaKeyWords: "",
    ideaAuthor: "",
  };

  this.handleChangeIdeaName = this.handleChangeIdeaName.bind(this);
  this.handleChangeIdeaLang = this.handleChangeIdeaLang.bind(this);
  this.handleChangeIdeaDesc = this.handleChangeIdeaDesc.bind(this);
  this.handleChangeIdeaKeyWords = this.handleChangeIdeaKeyWords.bind(this);
  this.handleChangeIdeaAuthor = this.handleChangeIdeaAuthor.bind(this);

  this.handleSubmit = this.handleSubmit.bind(this);
}

getIdeas(){
  fetch("https://projects.enzoavagliano.fr:9000/ideas")
  .then(res => res.json())
  .then(res => this.setState({
    fetchedIdea: res
  }));
}

getServiceStatus(){
  fetch("https://projects.enzoavagliano.fr:9000/db")
  .then(res => res.text())
  .then(res => this.setState({
    serviceStatus: res
  }));
}

getCertifiedIdeas(){
  fetch("https://projects.enzoavagliano.fr:9000/certified")
  .then(res => res.json())
  .then(res => this.setState({
    certifiedIdeas: res
  }));
}

handleChangeIdeaName(e) {
  this.setState({
      ideaName: e.target.value
  });
  console.log('onChange Name : ', this.state.ideaName);
}

handleChangeIdeaLang(e) {
  this.setState({
      ideaLang: e.target.value
  });
  console.log('onChange lang : ', this.state.ideaLang);
}

handleChangeIdeaDesc(e) {
  this.setState({
      ideaDesc: e.target.value
  });
  console.log('onChange desc : ', this.state.ideaDesc);
}

handleChangeIdeaKeyWords(e) {
  this.setState({
      ideaKeyWords: e.target.value
  });
  console.log('onChange keywords : ', this.state.ideaKeyWords);
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
    description: this.state.ideaDesc,
    lang: this.state.ideaLang,
    keywords: this.state.ideaKeyWords
  };
  console.log(idea);

  axios.post('https://projects-enzoavagliano.fr:9000/add', idea)
    .then(res => console.log("data sent"))
    .catch(err => console.log(err.data));
}

componentWillMount(){
  this.getIdeas();
  this.getServiceStatus();
  this.getCertifiedIdeas();
}

render(){
  return (
    <div id="devdeas" className="d-flex flex-column dark">
      <div className="container text-center pt-3">
        <img style={{maxWidth:"35%"}} src={devdeasWhiteLogo} alt="Devdeas's logo light version"/>
      </div>
      <div className="dashboard container p-3">
        <div className="col-12 d-flex flex-column justify-content-center align-items-center p-3 status-board">
          <h1>Dashbord</h1>
          <div className="col-12 d-flex flex-wrap justify-content-around">
            <div className="serviceStatus d-flex flex-row">
              <p className="p-0 m-0">
                <Icon.GearFill/> Status :
                {this.state.serviceStatus === "ERROR" && <span style={{fontWeight:"bold",color:"#9146FF"}}> Offline</span>}
                {this.state.serviceStatus === 'OK' && <span style={{fontWeight:"bold",color:"#9146FF"}}> Online</span>}
              </p>
            </div>
            <div className="serviceStatus d-flex flex-row">
              <p className="p-0 m-0"><Icon.Braces/> Submited ideas : <span style={{fontWeight:"bold",color:"#9146FF"}}>{this.state.fetchedIdea.length}</span></p>
            </div>
            <div className="serviceStatus d-flex flex-row">
              <p className="p-0 m-0">
                <Icon.PatchCheckFll/> Certified Ideas :
                <span style={{fontWeight:"bold",color:"#9146FF"}}> {this.state.certifiedIdeas.length}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="submit-center container pt-3">
        <div className="col-12 d-flex flex-column justify-content-center align-items-center p-3 submit-form">
          <h1>Submit form</h1>
          <div className="col-12">
            {/*<h5>Submit your idea now !</h5>*/}

            <form onSubmit={this.handleSubmit}>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label htmlFor="inputCreateIdeaAuthor">Author <small className="alt-text-form">(Anonymous if null)</small></label>
                  <input onChange={this.handleChangeIdeaAuthor} type="text" className="form-control" id="inputCreateIdeaAuthor" placeholder="What's your name ?"/>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputCreateIdeaName">Idea name <small className="alt-text-form">(Required)</small></label>
                  <input onChange={this.handleChangeIdeaName} type="text" className="form-control" id="inputCreateIdeaName" placeholder="Give a name to your idea" required/>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputCreateIdeaLang">Idea language <small className="alt-text-form">(If multiple : Separe by comma ' , ' without spaces)</small></label>
                  <input onChange={this.handleChangeIdeaLang} type="text" className="form-control" id="inputCreateIdeaLang" placeholder="HTML,Javascript,C,C#,Ruby"/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inoutCreateIdeaDescription">Idea description</label>
                <textarea onChange={this.handleChangeIdeaDesc} className="form-control" type="text" id="inoutCreateIdeaDescription" cols="30" rows="5" placeholder="Describe your idea with the most details you can give"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="inputCreateIdeaKeywords">Idea keywords <small className="alt-text-form">(If multiple : Separe by comma ' , ' without spaces)</small></label>
                <input onChange={this.handleChangeIdeaKeyWords} type="text" className="form-control" id="inputCreateIdeaKeywords" placeholder="Hack,Web,Automation"/>
              </div>

              <div className="d-flex flex-column justify-content-center align-items-center">
                <button type="submit" className="btn btn-success col-12">Submit you idea !</button>
                <small className="alt-text-form">Don't forget to refresh the page after submitting</small>
                <small className="alt-text-form">The form doesn't refresh it for you ;)</small>
              </div>
              <small>
                Database connection :
                {this.state.serviceStatus === "ERROR" && <span style={{fontWeight:"bold",color:"#9146FF"}}> Offline</span>}
                {this.state.serviceStatus === 'OK' && <span style={{fontWeight:"bold",color:"#9146FF"}}> Online</span>}
              </small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
