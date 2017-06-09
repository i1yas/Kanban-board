import React from 'react';
import {Panel} from 'react-bootstrap';

function Task(props) {
    return (
        <div className="Task">
            <Panel header={props.title}>
                {props.children}
            </Panel>
        </div>
    )
}

export default Task;