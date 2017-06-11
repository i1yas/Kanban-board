import React from "react";
import "./Board.css";
import { PageHeader } from "react-bootstrap";
import Task from "./Task";

function Board(props) {
	return (
		<div className="Board">
			<PageHeader className="Board__title">
				{props.name}
			</PageHeader>
			<div className="content">
				{props.tasks.map((task, ind) => {
					return (
						<Task
							key={ind}
							title={task.title}
							labels={task.labels}
							importantLabels={task.importantLabels}
							image={task.image}
						>
							{task.content}
						</Task>
					);
				})}
			</div>
		</div>
	);
}

export default Board;
