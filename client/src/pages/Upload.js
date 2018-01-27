import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import Nav from "../components/Nav";
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
      size: file.size,
      // userName: this.props.user.local.username,
      // userId: this.props.user._id 
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
        <div className="row" style={ { "paddingTop": "25px" } }>
          <div className="col-sm-12">
            <h3>Select a text file:</h3>
            <form action="http://localhost:3001/api/upload" encType="multipart/form-data" method="post">
              <div className="form-group">
                  <input
                    type="file"
                    className="form-control"
                    onChange={this.fileInput}
                    name="pgeCsv"
                    id="pgeCsv"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Upload
                </button>
              </form>
              <p>
                Username: {this.props.user.local.username} <br />
                User ID: {this.props.user._id}
              </p>
              <p
                id="fileData"
                style={{ paddingTop: "25px", fontSize: "22px" }}
              />
              <p
                id="fileContent"
                style={{ paddingTop: "25px", fontSize: "22px" }}
              />
            </div>
          </div>
      </Container>
    )
  }
}

export default Upload;
