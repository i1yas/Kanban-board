import React from 'react';
import {Panel} from 'react-bootstrap';

function Board(props) {
    return (
        <Panel header={props.name}>
            {props.children}
        </Panel>        
    )
}

export default Board;