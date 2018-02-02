// Setup React
import React, { Component } from "react";
import { Link } from "react-router-dom";
// Import page components
import { Container } from "../components/Grid";
import Nav from "../components/Nav";
import "../css/upload.css";
import Alert from "../components/Upload/Alert";
import Modal from "../components/Upload/Modal";
 // Import utility methods
import * as utils from "../utils/readcsv";

class Upload extends Component {
  constructor() {
    super();
  }

  // Initialize utility methods
  choose_handler = utils.choose_handler;
  drop_handler = utils.drop_handler;
  dragover_handler = utils.dragover_handler;
  dragexit_handler = utils.dragexit_handler;

  render() {
    return (
      <Container>
        <div className="row" style={ { "paddingTop": "25px" } }>
          { /* Upload status alerts */ }
          <Alert/>
          <div className="col-sm-12">
            { /* Drag and drop form */ }
            <form id="pgeCsvForm" action="/api/upload" className="drag__form" encType="multipart/form-data" method="post">
              { /* File input */ }
              <input type="file" className="drag__file" onChange={ this.choose_handler } onDrop={ this.drop_handler } onDragOver={ this.dragover_handler } onDragLeave={ this.dragexit_handler }
                name="pgeCsv" id="pgeCsv" />
              <label htmlFor="file"><strong>Choose a file</strong><span className="drag__choose"> or drag it here</span>.</label>
              { /* Hidden fields with username/id. */ }
              <input type="text" name="username" id="username" defaultValue={ this.props.user.local.username } />
              <input type="text" name="userid" id="userid" defaultValue={ this.props.user._id } />
              { /* Display file data and content */ }
              <p id="fileData" style={ { paddingTop: "25px", fontSize: "22px" } }></p>
              <p id="fileContent" style={ { paddingTop: "25px", fontSize: "22px" } }></p>
              { /* Form submit button */ }
              <button type="submit" className="drag__submit">
                Upload
              </button>
            </form>
          </div>
          { /* Button that opens the information/how-to modal */ }
          <div className="col-sm-12 text-center" id="info-toggle">
            <button type="button" className="btn btn-light" data-toggle="modal" data-target="#howto">
              <i className="fa fa-info" aria-hidden="true"></i>
            </button>
          </div>
          { /* Modal component */ }
          <Modal />
        </div>
      </Container>
    )
  }
}

export default Upload;
