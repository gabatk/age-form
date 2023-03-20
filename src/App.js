import React, { useState } from 'react';
import FormPanel from './component/FormPanel';
import UsersData from './component/UsersData';
import ErrorModal from './component/ErrorModal';
import './App.css';

const usersList = [
	// { username: 'Damian', age: 25, id:'e1'},
	// { username: 'Izik', age: 2, id:'e2' },
	// { username: 'Leon', age: 17, id:'e3' },
];

function App() {
	const [newUserInfo, setNewUserInfo] = useState(usersList),
		newUserDataHandler = newUserData => {
			setNewUserInfo(prevNewUserInfo => {
				return [newUserData, ...prevNewUserInfo];
			});
		};

	return (
		<div>
			<div className='app'>
				<FormPanel onNewUserData={newUserDataHandler} />
				<UsersData items={newUserInfo} />
			</div>
			<div className='app error-modal'>
				<ErrorModal
					title='An error occured!'
					message='Something went wrong, please check the data you entered.'
				/>
			</div>
		</div>
	);
}

export default App;
