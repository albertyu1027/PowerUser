import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";

class Upload extends Component {

  constructor() {
    super();
  }

  fileInput(event) {
    var file = event.target.files[0];
    var details = {
      name: file.name,
      type: file.type,
      size: file.size
    }
    document.getElementById("file").innerText = JSON.stringify(details);
  }

  render() {

    return (
      <Container>
      <div className="row" style={{"padding-top":"25px"}}>
        <div className="col-sm-12">
        <h3>Select a text file:</h3>
        <input type="file" className="btn btn-outline-primary btn-lg" onChange={this.fileInput} id="fileInput" />
        <p id="file" style={{"padding-top":"25px", fontSize:"22px"}}></p>
        </div>
      </div>
      </Container>
    )
  }
}

export default Upload;
