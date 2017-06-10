import React from "react";
import {Button, Modal} from 'react-bootstrap';
import AddForm from './AddForm';

function AddWindow(props) {
	return (
		<Modal>
			<Modal.Header>
				<Modal.Title>New Task</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<AddForm />
			</Modal.Body>

			<Modal.Footer>
				<Button>Close</Button>
				<Button bsStyle="primary">Add task</Button>
			</Modal.Footer>

		</Modal>
	);
}

export default AddWindow;
