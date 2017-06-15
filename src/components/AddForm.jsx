import React from "react";
import {
	Form, FormGroup, FormControl, ControlLabel, InputGroup, DropdownButton, MenuItem
} from "react-bootstrap";
import FileInput from './FileInput';

function AddForm(props) {
	function handleFileInput({path, files}) {
		const file = files[0];
		const reader = new FileReader();

		reader.onloadend = function() {
			inputImage = reader.result;
		}

		if(file) {
			reader.readAsDataURL(file);
		}
	}
	function handleUrlInput(event) {
		inputImage = event.target.value;
	}

	const allFields = ['title', 'content', 'labels', 'importantLabels', 'image', 'imageType'];

	let fields
	if (props.fields === 'all') fields = allFields;
	else fields = props.fields;

	const userImageTypesDict = {
		'url': 'URL',
		'base64': 'Local'
	}
	const userImageType = userImageTypesDict[props.data.imageType];
	const userImageTypesList = [];
	for(let key in userImageTypesDict) userImageTypesList.push(userImageTypesDict[key]);

	let inputImage;

	return (
		<Form>
			{fields.indexOf('title') !== -1 &&
				<FormGroup controlId="addFormName">
					<ControlLabel>Title</ControlLabel>
					<FormControl type="text" value={props.data && props.data.title} />
				</FormGroup>
			}
			{fields.indexOf('content') !== -1 &&
				<FormGroup controlId="addFormContent">
					<ControlLabel>Task content</ControlLabel>
					<FormControl componentClass="textarea" value={props.data && props.data.content} />
				</FormGroup>
			}

			{(fields.indexOf('labels') !== -1 || fields.indexOf('importantLabels') !== -1) && <hr />}
			{fields.indexOf('labels') !== -1 &&
				<FormGroup controlId="addFormLabels">
					<ControlLabel>Labels</ControlLabel>
					<FormControl
						type="text"
						placeholder="list of labels separated by a comma"
						value={props.data && props.data.labels}
					/>
				</FormGroup>
			}
			{fields.indexOf('importantLabels') !== -1 &&
				<FormGroup controlId="addFormImportantLabels">
					<ControlLabel>Important labels</ControlLabel>
					<FormControl
						type="text"
						placeholder="list of labels separated by a comma"
						value={props.data && props.data.importantLabels}
					/>
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
							title={userImageType}
						>
							{userImageTypesList.map((type, ind) => {
								return (
									<MenuItem
										key={ind}
										header={type === userImageType}
									>
									{type}
									</MenuItem>
								)
							})}
						</DropdownButton>
						{props.data.imageType === 'url' &&
							<FormControl
								type="text"
								placeholder="http://site.com/image.jpg"
								value={props.data && props.data.image}
								onChange={handleUrlInput}
							/>
						}
						{props.data.imageType === 'base64' &&
							<FileInput
								onChange={handleFileInput}
							/>
						}
					</InputGroup>
					<img
						src={inputImage || props.data.image}
						alt="Attach"
						height={50}
					/>
				</FormGroup>
			}
		</Form>
	);
}

export default AddForm;