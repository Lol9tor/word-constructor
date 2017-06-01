import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import WordConstruct from './pages/WordConstruct';
import AdminPanel from './pages/AdminPanel';
import NotFound from './pages/NotFound';

class App extends React.Component {
	static propTypes = {};

	render() {
		return <Router>
			<div>
				<Switch>
					<Route path="/admin" component={AdminPanel}/>
					<Route exact path="/" component={WordConstruct} />
					<Route component={NotFound}/>
				</Switch>
			</div>
		</Router>
	}
}

export default App;