import React from 'react';
import {PageHeader} from 'react-bootstrap';

function Board(props) {
    return (
        <div className="Board">
            <PageHeader>
                {props.name}
            </PageHeader>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}

export default Board;