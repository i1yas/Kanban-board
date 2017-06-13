import React from "react";
import { Panel, Label, Media, Button, ButtonToolbar } from "react-bootstrap";
import "./Task.css";
import AddForm from "./AddForm";

function Task(props) {
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
}

export default Task;
