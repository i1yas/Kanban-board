import React from "react";
import {
	Form, FormGroup, FormControl, ControlLabel, InputGroup, DropdownButton, MenuItem
} from "react-bootstrap";

function AddForm(props) {
	const allFields = ['title', 'content', 'labels', 'importantLabels', 'image'];

	let fields
	if (props.fields === 'all') fields = allFields;
	else fields = props.fields;

	return (
		<Form>
			{fields.indexOf('title') !== -1 &&
				<FormGroup controlId="addFormName">
					<ControlLabel>Title</ControlLabel>
					<FormControl type="text" />
				</FormGroup>
			}
			{fields.indexOf('content') !== -1 &&
				<FormGroup controlId="addFormContent">
					<ControlLabel>Task content</ControlLabel>
					<FormControl componentClass="textarea" />
				</FormGroup>
			}

			{(fields.indexOf('labels') !== -1 || fields.indexOf('importantLabels') !== -1) && <hr />}
			{fields.indexOf('labels') !== -1 &&
				<FormGroup controlId="addFormLabels">
					<ControlLabel>Labels</ControlLabel>
					<FormControl type="text" placeholder="list of labels separated by a comma" />
				</FormGroup>
			}
			{fields.indexOf('importantLabels') !== -1 &&
				<FormGroup controlId="addFormImportantLabels">
					<ControlLabel>Important labels</ControlLabel>
					<FormControl type="text" placeholder="list of labels separated by a comma" />
				</FormGroup>
			}

			{fields.indexOf('image') !== -1 && <hr />}
			{fields.indexOf('image') !== -1 &&
				<FormGroup>
					<ControlLabel>Image</ControlLabel>
					<InputGroup>
						<DropdownButton
							componentClass={InputGroup.Button}
							id="input-dropdown-addon"
							title="Type"
						>
							<MenuItem key="1">URL</MenuItem>
						</DropdownButton>
						<FormControl type="text" placeholder="http://site.com/image.jpg"/>
					</InputGroup>
				</FormGroup>
			}
		</Form>
	);
}

export default AddForm;