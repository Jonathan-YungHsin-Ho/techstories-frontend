import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import Onboarding from './components/Onboarding';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<div className='content'>
				<Route exact path='/' component={Onboarding} />
			</div>
		</div>
	);
}

export default App;
