import React, { Component } from 'react';
import './App.css';
import { Navbar, Grid, Row } from 'react-bootstrap';
import Board from './components/Board';

class App extends Component {
	render() {
		return (
				<div className="app">
					<Navbar>
						<Navbar.Brand>Kanban board</Navbar.Brand>
					</Navbar>
					
					<Grid>
						<Row>
							<Board name="To-do">
								Tasks
							</Board>
						</Row>
					</Grid>
					
				</div>
			);
	}
}

export default App;
