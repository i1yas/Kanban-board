import React, { Component } from "react";
import { Panel, Label, Media, Button, ButtonToolbar } from "react-bootstrap";
import "./Task.css";
import AddForm from "./AddForm";

class Task extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEdit: false
		}
	}
	onEditMode() {
		this.setState({
			...this.state,
			isEdit: true
		});
	}
	offEditMode() {
		this.setState({
			...this.state,
			isEdit: false
		});
	}
	handleClick() {
		this.onEditMode();
	}
	render() {
		const allFields = ['title', 'content', 'labels', 'importantLabels', 'image'];
		const usedFields = allFields.filter(field => this.props[field]);
		const data = {};
		for(let i = 0; i < usedFields.length; i++) {
			data[usedFields[i]] = this.props[usedFields[i]];
		}

		return (
			<div className="Task" onClick={this.handleClick.bind(this)}>
				<Panel header={this.props.title}>
					{!this.state.isEdit &&
						<div>
							<div className="Task__content">
								<Media>
									{this.props.image &&
										<Media.Left>
											<img
												src={this.props.image}
												alt={this.props.title}
												height={100}
											/>
										</Media.Left>}
									<Media.Body>
										{this.props.content}
									</Media.Body>
								</Media>
							</div>
							{(this.props.labels || this.props.importantLabels) &&
								<div className="Task__labels">
									{this.props.labels &&
										this.props.labels.map((label, ind) => {
											return (
												<span key={ind} className="Task__label">
													<Label bsStyle="info">
														{label}
													</Label>
													{"\u00A0"}
												</span>
											);
										})}
									{this.props.importantLabels &&
										this.props.importantLabels.map((label, ind) => {
											return (
												<span key={ind} className="Task__label">
													<Label bsStyle="primary">
														{label}
													</Label>
													{"\u00A0"}
												</span>
											);
										})}
								</div>}
						</div>
					}

					{this.state.isEdit &&
						<div className="Task__editForm">
							<AddForm
								fields={usedFields}
								data={data}
							/>
							<ButtonToolbar className="Task__editForm-buttons pull-right">
								<Button>Cancel</Button>
								<Button bsStyle="primary">Save</Button>
							</ButtonToolbar>
						</div>
					}
				</Panel>
			</div>
		);
	}
}

export default Task;
