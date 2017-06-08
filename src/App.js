import React, { Component } from 'react';
import './App.css';
import {
	PageHeader
} from 'react-bootstrap';


class App extends Component {
	render() {
		return (
				<PageHeader>
					Kanban board <small>simple organization tool</small>
				</PageHeader>
			);
	}
}

export default App;
