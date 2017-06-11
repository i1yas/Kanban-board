import React from "react";
import { Panel, Label, Media } from "react-bootstrap";
import './Task.css';

function Task(props) {
	return (
		<div className="Task">
			<Panel header={props.title}>
				<div className="Task__content">
					<Media>
						{props.image && (
							<Media.Left>
								<img
									src={props.image}
									alt={props.title}
									height={100}
								/>
							</Media.Left>)
						}
						<Media.Body>
							{props.children}
						</Media.Body>
					</Media>
				</div>
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
				</div>
			</Panel>
		</div>
	);
}

export default Task;