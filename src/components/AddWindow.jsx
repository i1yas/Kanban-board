import React from "react";
import {Button, Modal} from 'react-bootstrap';
import AddForm from './AddForm';

function AddWindow(props) {
	let data = {};
	function handleCloseClick() {
		props.actions.toggleWindow('close');
	}
	function handleAddClick() {
		props.actions.updateData('task',
			data,
			'to-do'
		);
	}
	function handleFormChange(result) {
		data = {...data, ...result};
	}
	return (
		<Modal show={props.show}>
			<Modal.Header>
				<Modal.Title>New Task</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<AddForm fields='all'
					onChange={handleFormChange}
				/>
			</Modal.Body>

			<Modal.Footer>
				<Button onClick={handleCloseClick}>Close</Button>
				<Button bsStyle="primary" onClick={handleAddClick}>Add task</Button>
			</Modal.Footer>

		</Modal>
	);
}

export default AddWindow;
