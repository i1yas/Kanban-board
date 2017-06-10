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
			<hr />
			<FormGroup controlId="addFormLabels">
				<ControlLabel>Labels</ControlLabel> 
				<FormControl type="text" placeholder="list of labels separated by a comma" />
			</FormGroup>
			<FormGroup controlId="addFormImportantLabels">
				<ControlLabel>Important labels</ControlLabel> 
				<FormControl type="text" placeholder="list of labels separated by a comma" />
			</FormGroup>
		</Form>
	);
}

export default AddForm;