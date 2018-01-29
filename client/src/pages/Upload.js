import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import Nav from "../components/Nav";
import "../css/upload.css";
class Upload extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    //User data is this.props.user
    console.log(this.props);
  }
  fileInput(event) {
    var file = event.target.files[0];
    var textType = /text.*/;
    var details = {
      name: file.name,
      type: file.type,
      size: file.size
    };

    document.getElementById("fileData").innerText = JSON.stringify(details);

    if (file.type.match(textType)) {
      var reader = new FileReader();

      reader.onload = function() {
        document.getElementById("fileContent").innerText = reader.result;
      };

      reader.readAsText(file);
    } else {
      document.getElementById("fileContent").innerText = "File not supported!";
    }
  }

  drop_handler(event) {
    event.preventDefault();
    console.log(event);
  }

  dragover_handler(event) {
    event.preventDefault();
    console.log(event);
  }

  render() {
    return (
      <Container>
        <div className="row" style={ { "paddingTop": "25px" } }>
          <div className="col-sm-12">
            <form className="box" action="http://localhost:3001/api/upload" encType="multipart/form-data" method="post">
              <div className="box__input">
                <input type="file" className="box__file" onChange={ this.fileInput } onDrop={this.drop_handler} onDragOver={this.drop_handler} name="pgeCsv" id="pgeCsv" />
                <label htmlFor="file"><strong>Choose a file</strong><span className="box__dragndrop"> or drag it here</span>.</label>
                <input type="text" style={ { "display": "none" } } name="username" id="username" defaultValue={ this.props.user.local.username } />
                <input type="text" style={ { "display": "none" } } name="userid" id="userid" defaultValue={ this.props.user._id } />
              </div>
              <button type="submit" className="box__button">
                Upload
              </button>
              <div className="box__uploading">Uploading…</div>
              <div className="box__success">Done!</div>
              <div className="box__error">Error! <span></span>.</div>
            </form>
            {/* <p id="fileData" style={ { paddingTop: "25px", fontSize: "22px" } } />
            <p id="fileContent" style={ { paddingTop: "25px", fontSize: "22px" } } /> */}
          </div>
        </div>
      </Container>
    )
  }
}

export default Upload;
