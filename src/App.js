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
	const [newUserInfo, setNewUserInfo] = useState(usersList);
	const [showError, setshowError] = useState();

	const newUserDataHandler = newUserData => {
		setNewUserInfo(prevNewUserInfo => {
			return [newUserData, ...prevNewUserInfo];
		});
	};

	const showErrorModal = errorText => {
		setshowError(errorText);
		console.log(errorText);
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<div>
			<div className='app'>
				<FormPanel
					onNewUserData={newUserDataHandler}
					onErrorInfo={showErrorModal}
					onErrorHandler={errorHandler}
				/>
				<UsersData items={newUserInfo} />
			</div>
			<div className='app error-modal'>
				{showError && (
					<ErrorModal title={showError.title} message={showError.message} />
				)}
			</div>
		</div>
	);
}

export default App;
