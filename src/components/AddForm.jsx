import React from "react";
import { Form, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

function AddForm(props) {
	return (
		<Form>
			<FormGroup controlId="addFormName">
				<ControlLabel>Title</ControlLabel> 
				<FormControl type="text" />
			</FormGroup>
			<FormGroup controlId="addFormContent">
				<ControlLabel>Task content</ControlLabel> 
				<FormControl componentClass="textarea" />
			</FormGroup>
		</Form>
	);
}

export default AddForm;