import React, { Component } from 'react';
import './App.css';
import { Navbar } from 'react-bootstrap';


class App extends Component {
	render() {
		return (
				<Navbar>
					<Navbar.Brand>Kanban board</Navbar.Brand>
				</Navbar>
			);
	}
}

export default App;
