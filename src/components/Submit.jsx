import React, { Component } from 'react';

class Submit extends Component{
  render(){
    return(
      <div id="submitidea" className="mt-5 p-3 col-11 col-lg-7">
        <h2>Submit your idea</h2>

        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="userName">Author <span className="form-alt">(Anonymous if null)</span></label>
              <input type="text" className="form-control" id="userName" placeholder="What's your name ?"/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="ideaName">Idea name <span className="form-alt">Required</span></label>
              <input type="text" className="form-control" id="ideaName" placeholder="Give a name to your idea."/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="ideaDescription">Idea description <span className="form-alt">Required</span></label>
            <textarea className="form-control" id="ideaDescription" rows="6" placeholder="Describe your idea, with the most details you can give."></textarea>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="ideaLangs">Idea Languages <span className="form-alt">(If multiple : Separe by comma " , " without spaces)</span></label>
              <input type="text" className="form-control" id="ideaLangs" placeholder="HTML,ReatJS,C++,Java,Ruby,Python"/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="ideaKeywords">Idea Keywords <span className="form-alt">(If multiple : Separe by comma " , " without spaces)</span></label>
              <input type="text" className="form-control" id="ideaKeywords" placeholder="PWA,Sharing,Community,Automation"/>
            </div>
          </div>
          <button type="submit" className="col-md-12 btn btn-success">Submit your idea !</button>
        </form>
      </div>
    )
  }
}

export default Submit;
