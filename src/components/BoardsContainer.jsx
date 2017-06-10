import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Board from "./Board";

function BoardsContainer(props) {
	return (
		<Grid className="Boards-Container">
			<Row>
				{props.boards.map(board => {
					return (
						<Col xs={6}>
							<Board
								name={board.name}
								tasks={board.tasks}
							/>
						</Col>
					);
				})}
			</Row>
		</Grid>
	);
}

export default BoardsContainer;