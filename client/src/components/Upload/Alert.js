import React from "react";

function Alert(props) {
  return (
    <div className="col-sm-12">
      <div className="alert alert-success alert-dismissible fade show" role="alert">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
        CSV successfully uploaded!
      </div>
      <div className="alert alert-danger alert-dismissible fade show" role="alert">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
        Error uploading CSV!
      </div>
      <div className="alert alert-info alert-dismissible fade show" role="alert">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
        Uploading file!
      </div>
    </div>
    );
}

export default Alert;