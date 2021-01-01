import React from 'react'
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from '../../routes'

import './App.css'

function App() {
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App