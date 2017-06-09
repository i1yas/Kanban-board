import React, { Component } from 'react';
import './App.css';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import Board from './components/Board';
import Task from './components/Task';

class App extends Component {
	render() {
		return (
				<div className="app">
					<Navbar>
						<Navbar.Brand>Kanban board</Navbar.Brand>
					</Navbar>
					
					<Grid>
						<Row>
							<Col xs={6}>
								<Board name="To-do">
									<Task title="Lol">Sfasklfsa</Task>
									<Task title="Musor">Virbros musor uzhe</Task>
								</Board>
							</Col>
						</Row>
					</Grid>
					
				</div>
			);
	}
}

export default App;
