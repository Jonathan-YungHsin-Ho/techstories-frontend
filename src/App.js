import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Internship from './components/Internship';
import Onboarding from './components/Onboarding';
import About from './components/About';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<div className='content'>
				<Route exact path='/' component={Home} />
				<Route path='/internship' component={Internship} />
				<Route path='/onboarding' component={Onboarding} />
				<Route path='/about' component={About} />
			</div>
		</div>
	);
}

export default App;
