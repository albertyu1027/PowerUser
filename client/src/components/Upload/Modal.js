import React from "react";
import "../../css/modal.css";

function Modal(props) {
	return (
		<div className="modal fade" id="howto" tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
			<div className="modal-dialog" role="document">
			<div className="modal-content">
				<div className="modal-header">
				<h5 className="modal-title" id="modalLabel">How to import data from PG&E</h5>
				<button type="button" className="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">×</span>
				</button>
				</div>
				<div className="modal-body">
				<ol>
					<li>Sign in to your residential account at <em>www.pge.com</em></li>
					<li>Click <em>Energy Usage Details</em></li>
					<li>Click the button labeled <em>Download my Data</em></li>
					<li>Select "Export usage for a bill period"</li>
					<li>Select the month you would like to export</li>
					<li>Click <em>Export</em></li>
					<li>Unzip the file and drag on to this page</li>
				</ol>
				</div>
				<div className="modal-footer">
				<button type="button" className="btn btn-info" data-dismiss="modal">Close</button>
				</div>
			</div>
			</div>
		</div>
		);
}

export default Modal;