import React, { Component } from "react";
import "./App.css";
import { Grid, Row, Navbar, Button, Glyphicon } from "react-bootstrap";
import BoardsContainer from "./components/BoardsContainer";
import AddWindow from './components/AddWindow';

const boards = [
	{
		name: "To-do",
		tasks: [
			{
				title: "Rest",
				content: "Just relax and listen music"
			},
			{
				title: "Do sport",
				content: "Run, swim, jump e.t.c."
			}
		]
	},
	{
		name: "Done",
		tasks: [
			{
				title: "Learn",
				content: "Understand integrals"
			},
			{
				title: "Phone",
				content: "Restore phone"
			}
		]
	}
];

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
