import React from 'react';
import FormPanel from './component/FormPanel';
import UsersData from './component/UsersData';
import './App.css';

const users = [
	{ username: 'Damian', age: 25 },
	{ username: 'Izik', age: 2 },
	{ username: 'Leon', age: 17 },
];

function App(prop) {
	return (
		<div className='app'>
			<FormPanel />
			<UsersData usernameValue={insertedUsername} userAgeValue={insertedAge}/>
		</div>
	);
}

export default App;
