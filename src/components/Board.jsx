import React from 'react';
import {PageHeader} from 'react-bootstrap';
import Task from './Task';

function Board(props) {
    return (
        <div className="Board">
            <PageHeader>
                {props.name}
            </PageHeader>
            <div className="content">
                {props.tasks.map((task, ind) => {
                	return (
                			<Task
                				key={ind}
                				title={task.title}
                			>{task.content}</Task>
                		);
                })}
            </div>
        </div>
    )
}

export default Board;