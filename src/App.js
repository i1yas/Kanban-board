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
				content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid repellendus fugit ipsam rem dicta id, error neque repudiandae, quasi voluptatem repellat nesciunt accusantium. Repudiandae voluptas quia, assumenda dolores tenetur, ipsum."
			},
			{
				title: "Do sport",
				content: "Run, swim, jump e.t.c.",
				labels: ["run", "sport", "swim"]
			}
		]
	},
	{
		name: "Done",
		tasks: [
			{
				title: "Learn",
				content: "Understand integrals",
				labels: ["math", "learn"],
				importantLabels: ["matanalysis"]
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
