import React, { Component } from "react";
import {
	Form, FormGroup, FormControl, ControlLabel, InputGroup, DropdownButton, MenuItem, Image
} from "react-bootstrap";
import FileInput from './FileInput';

class AddForm extends Component {
	constructor(props) {
		super(props);

		this.reader;
		this.file = null;

		this.allFields = ['title', 'content', 'labels', 'importantLabels', 'image', 'imageType'];
		this.fields = this.props.fileds === 'all' ? this.allFields : this.props.fields;

		this.userImageTypesDict = {
			'url': 'URL',
			'base64': 'Local'
		};
		this.userImageType = this.userImageTypesDict[this.props.data.imageType];
		this.userImageTypesList = [];
		
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


	render() {
		for (let key in this.userImageTypesDict) this.userImageTypesList.push(this.userImageTypesDict[key]);

		return (
			<Form>
				{this.fields.indexOf('title') !== -1 &&
					<FormGroup controlId="addFormName">
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
					<FormGroup>
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
							{this.props.data.imageType === 'url' &&
								<FormControl
									type="text"
									placeholder="http://site.com/image.jpg"
									value={this.props.data && (this.state.inputImage || this.props.data.image)}
									onChange={this.handleUrlInput.bind(this)}
								/>
							}
							{this.props.data.imageType === 'base64' &&
								<FileInput
									onChange={this.handleFileInput.bind(this)}
								/>
							}
						</InputGroup>
						<Image
							thumbnail
							src={this.state.inputImage || this.props.data.image}
							alt="Attach"
							style={{
								height: "80px",
								marginTop: "10px"
							}}
						/>
					</FormGroup>
				}
			</Form>
		);
	}
}

export default AddForm;