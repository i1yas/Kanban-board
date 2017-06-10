import React from "react";
import { Row, Col } from "react-bootstrap";
import Board from "./Board";

function BoardsContainer(props) {
	return (
		<Row>
			{props.boards.map((board, ind) => {
				return (
					<Col xs={6} key={ind}>
						<Board
							name={board.name}
							tasks={board.tasks}
						/>
					</Col>
				);
			})}
		</Row>
	);
}

export default BoardsContainer;