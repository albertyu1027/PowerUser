import React from "react";

function Modal(props) {
	return (
		<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div className="modal-dialog" role="document">
			<div className="modal-content">
				<div className="modal-header">
				<h5 className="modal-title" id="exampleModalLabel">Are you sure?</h5>
				<button type="button" className="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">×</span>
				</button>
				</div>
				<div className="modal-body">
				Et has debitis vivendo, nam dicant malorum te. Justo moderatius elaboraret cu est, nibh placerat insolens id mea. Suas equidem usu ad, eos ex sint stet alterum.
				Sit in adhuc propriae contentiones, dicta decore eum an.
				</div>
				<div className="modal-footer">
				<button type="button" className="btn btn-secondary" data-dismiss="modal">Nope</button>
				<button type="button" className="btn btn-primary">Yep</button>
				</div>
			</div>
			</div>
		</div>
		);
}

export default Modal;