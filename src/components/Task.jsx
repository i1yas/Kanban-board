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
							<AddForm fields={usedFields} />
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
/*function Task(props) {
	const allFields = ['title', 'content', 'labels', 'importantLabels', 'image'];
	const usedFields = allFields.filter(field => props[field]);

	return (
		<div className="Task">
			<Panel header={props.title}>
				<div className="Task__content">
					<Media>
						{props.image &&
							<Media.Left>
								<img
									src={props.image}
									alt={props.title}
									height={100}
								/>
							</Media.Left>}
						<Media.Body>
							{props.content}
						</Media.Body>
					</Media>
				</div>
				{(props.labels || props.importantLabels) &&
					<div className="Task__labels">
						{props.labels &&
							props.labels.map((label, ind) => {
								return (
									<span key={ind} className="Task__label">
										<Label bsStyle="info">
											{label}
										</Label>
										{"\u00A0"}
									</span>
								);
							})}
						{props.importantLabels &&
							props.importantLabels.map((label, ind) => {
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
					
				<div className="Task__editForm">
					<AddForm fields={usedFields}/>
					<ButtonToolbar className="Task__editForm-buttons pull-right">
						<Button>Cancel</Button>
						<Button bsStyle="primary">Save</Button>
					</ButtonToolbar>
				</div>			
			</Panel>
		</div>
	);
}*/

export default Task;
