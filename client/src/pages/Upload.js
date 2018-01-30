import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import Nav from "../components/Nav";
import "../css/upload.css";
import Alert from "../components/Upload/Alert";
import Modal from "../components/Upload/Modal";
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
    console.log(event.dataTransfer.items[0].kind);
    console.log(event.dataTransfer.items[0].type);
  }

  dragover_handler(event) {
    event.preventDefault();
    document.getElementById("pgeCsvForm").style.borderColor = "#00b8d8";
  }

  dragexit_handler(event) {
    event.preventDefault();
    console.log(event.type);
    document.getElementById("pgeCsvForm").style.borderColor = "#e9ecef";
  }

  render() {
    return (
      <Container>
        <div className="row" style={ { "paddingTop": "25px" } }>
          <Alert/>
          <div className="col-sm-12">
            <form id="pgeCsvForm" className="box" action="http://localhost:3001/api/upload" encType="multipart/form-data" method="post">
              <input type="file" className="box__file" onChange={ this.fileInput } onDrop={ this.drop_handler } onDragOver={ this.dragover_handler } onDragLeave={ this.dragexit_handler }
                name="pgeCsv" id="pgeCsv" />
              <label htmlFor="file"><strong>Choose a file</strong><span className="box__dragndrop"> or drag it here</span>.</label>
              <input type="text" style={ { "display": "none" } } name="username" id="username" defaultValue={ this.props.user.local.username } />
              <input type="text" style={ { "display": "none" } } name="userid" id="userid" defaultValue={ this.props.user._id } />
              <button type="submit" className="box__button">
                Upload
              </button>
            </form>
          </div>
          <div className="col-sm-12">
              {/* <p id="fileData" style={ { paddingTop: "25px", fontSize: "22px" } } />
              <p id="fileContent" style={ { paddingTop: "25px", fontSize: "22px" } } /> */}
              <button type="button" className="btn btn-primary text-center" data-toggle="modal" data-target="#exampleModal">
              <i className="fa fa-info" aria-hidden="true"></i>
              </button>
            </div>
          <Modal />
        </div>
      </Container>
    )
  }
}

export default Upload;
