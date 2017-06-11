import React, { Component } from "react";
import "./App.css";
import { Grid, Row, Navbar, Button, Glyphicon } from "react-bootstrap";
import BoardsContainer from "./components/BoardsContainer";
import AddWindow from './components/AddWindow';

import boards from './initialData.json';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Grid fluid>
					<BoardsContainer boards={boards} />

					<Row />
				</Grid>

				<AddWindow />

				<Button className="App__add-button pull-right" bsStyle="primary" bsSize="large" >
					<Glyphicon glyph="plus" /> Add Task
				</Button>

				<Navbar
					className="App__footer"
					fixedBottom
					fluid
				>
					<Navbar.Brand className="App__footer-title">Kanban board</Navbar.Brand>
				</Navbar>
			</div>
		);
	}
}
export default App;
