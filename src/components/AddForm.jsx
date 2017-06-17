import React, { Component } from "react";
import {
	Form, FormGroup, FormControl, ControlLabel, InputGroup, DropdownButton, MenuItem, Image
} from "react-bootstrap";
import FileInput from './FileInput';

class AddForm extends Component {
	constructor(props) {
		super(props);

		this.file = null;

		this.allFields = ['title', 'content', 'labels', 'importantLabels', 'image', 'imageType'];
		this.fields = this.props.fields === 'all' ? this.allFields : this.props.fields;

		this.defaultImageType = 'url';
		this.data = this.props.data || {imageType: this.defaultImageType};

		this.userImageTypesDict = {
			'url': 'URL',
			'base64': 'Local'
		};

		this.userImageType = this.userImageTypesDict[this.data.imageType];
		this.userImageTypesList = [];
		for (let key in this.userImageTypesDict) {
			const type = this.userImageTypesDict[key]
			if(this.userImageTypesList.indexOf(type) !== -1) continue;
			this.userImageTypesList.push(type);
		}
		
		this.state = {
			inputImage: null
		}
	}

	handleFileInput({ path, files }) {
		this.file = files[0];
		const reader = new FileReader();

		reader.onloadend = (function () {
			this.setState({
				...this.state,
				inputImage: reader.result
			})
		}).bind(this)

		if (this.file) {
			reader.readAsDataURL(this.file);
		}
	}
	handleUrlInput(event) {
		this.setState({
			...this.state,
			inputImage: event.target.value
		})
	}
	handleFormChange(event) {
		const prefix = 'addForm';
		const fieldName = event.target.id.slice(prefix.length).toLowerCase();

		const result = {};
		result[fieldName] = event.target.value;

		this.props.onChange(result);
	}

	render() {
		return (
			<Form onChange={this.handleFormChange.bind(this)}>
				{this.fields.indexOf('title') !== -1 &&
					<FormGroup controlId="addFormTitle">
						<ControlLabel>Title</ControlLabel>
						<FormControl type="text" value={this.props.data && this.props.data.title} />
					</FormGroup>
				}
				{this.fields.indexOf('content') !== -1 &&
					<FormGroup controlId="addFormContent">
						<ControlLabel>Task content</ControlLabel>
						<FormControl componentClass="textarea" value={this.props.data && this.props.data.content} />
					</FormGroup>
				}

				{(this.fields.indexOf('labels') !== -1 || this.fields.indexOf('importantLabels') !== -1) && <hr />}
				{this.fields.indexOf('labels') !== -1 &&
					<FormGroup controlId="addFormLabels">
						<ControlLabel>Labels</ControlLabel>
						<FormControl
							type="text"
							placeholder="list of labels separated by a comma"
							value={this.props.data && this.props.data.labels}
						/>
					</FormGroup>
				}
				{this.fields.indexOf('importantLabels') !== -1 &&
					<FormGroup controlId="addFormImportantLabels">
						<ControlLabel>Important labels</ControlLabel>
						<FormControl
							type="text"
							placeholder="list of labels separated by a comma"
							value={this.props.data && this.props.data.importantLabels}
						/>
					</FormGroup>
				}

				{this.fields.indexOf('image') !== -1 && <hr />}
				{this.fields.indexOf('image') !== -1 &&
					<FormGroup controlId="addFormImage">
						<ControlLabel>Image</ControlLabel>
						<InputGroup>
							<DropdownButton
								componentClass={InputGroup.Button}
								id="input-dropdown-addon"
								title={this.userImageType}
							>
								{this.userImageTypesList.map((type, ind) => {
									return (
										<MenuItem
											key={ind}
											header={type === this.userImageType}
										>
											{type}
										</MenuItem>
									)
								})}
							</DropdownButton>
							{this.data.imageType === 'url' &&
								<FormControl
									type="text"
									placeholder="http://site.com/image.jpg"
									value={this.data && (this.state.inputImage || this.data.image)}
									onChange={this.handleUrlInput.bind(this)}
								/>
							}
							{this.data.imageType === 'base64' &&
								<FileInput
									onChange={this.handleFileInput.bind(this)}
								/>
							}
						</InputGroup>
						{this.data.image &&
							<Image
								thumbnail
								src={this.state.inputImage || this.data.image}
								alt="Attach"
								style={{
									height: "80px",
									marginTop: "10px"
								}}
							/>
						}
					</FormGroup>
				}
			</Form>
		);
	}
}

export default AddForm;