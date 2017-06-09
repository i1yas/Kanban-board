import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Board from './Board';
import Task from './Task';

function BoardsContainer(props) {
    return (
        <Grid className="Boards-Container">
            <Row>
                {props.boards.map(board => {
                    return (
                        <Col xs={6}>
                            <Board name={board.name}>
                                {board.tasks.map(task => {
                                    return (
                                        <Task title={task.title}>
                                            {task.content}
                                        </Task>
                                    );
                                })}
                            </Board>
                        </Col>
                    );
                })}
            </Row>
        </Grid>
    )
}

export default BoardsContainer;