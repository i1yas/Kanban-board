import React from "react";
import { Panel, Label } from "react-bootstrap";

function Task(props) {
	return (
		<div className="Task">
			<Panel header={props.title}>
				<div className="Task__content">
					{props.children}
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
