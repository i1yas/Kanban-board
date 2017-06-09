import React, { Component } from 'react';
import './App.css';
import { Navbar } from 'react-bootstrap';
import BoardsContainer from './components/BoardsContainer';

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
]

class App extends Component {
	render() {
		return (
			<div className="app">
				<Navbar>
					<Navbar.Brand>Kanban board</Navbar.Brand>
				</Navbar>

				<BoardsContainer boards={boards} />

			</div>
		);
	}
}

export default App;
