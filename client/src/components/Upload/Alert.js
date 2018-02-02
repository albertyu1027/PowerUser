import React from "react";

function Alert(props) {
  return (
    <div className="col-sm-12">
      <div id="alert_success" className="alert alert-success alert-dismissible fade show" role="alert">
      </div>
      <div id="alert_danger" className="alert alert-danger alert-dismissible fade show" role="alert">
      </div>
      <div id="alert_info" className="alert alert-info alert-dismissible fade show" role="alert">
      </div>
    </div>
    );
}

export default Alert;