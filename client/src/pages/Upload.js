import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";

class Upload extends Component {

  constructor() {
    super();
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

  render() {

    return (
      <Container>
        <div className="row" style={ { "padding-top": "25px" } }>
          <div className="col-sm-12">
            <h3>Select a text file:</h3>
            <input type="file" className="btn btn-outline-primary btn-lg" onChange={ this.fileInput } id="fileInput" />
            <p id="fileData" style={ { "padding-top": "25px", fontSize: "22px" } }></p>
            <p id="fileContent" style={ { "padding-top": "25px", fontSize: "22px" } }></p>
          </div>
        </div>
      </Container>
    )
  }
}

export default Upload;
