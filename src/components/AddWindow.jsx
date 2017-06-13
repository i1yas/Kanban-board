import React from "react";
import {Button, Modal} from 'react-bootstrap';
import AddForm from './AddForm';

function AddWindow(props) {
	function handleCloseClick() {
		props.actions.toggleWindow('close');
	}
	return (
		<Modal show={props.show}>
			<Modal.Header>
				<Modal.Title>New Task</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<AddForm fields='all' />
			</Modal.Body>

			<Modal.Footer>
				<Button onClick={handleCloseClick}>Close</Button>
				<Button bsStyle="primary">Add task</Button>
			</Modal.Footer>

		</Modal>
	);
}

export default AddWindow;
