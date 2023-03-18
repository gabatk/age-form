import React, { useState } from 'react';
import FormPanel from './component/FormPanel';
import UsersData from './component/UsersData';
import ErrorBox from './component/ErrorBox';
import './App.css';

const usersList = [
	// { username: 'Damian', age: 25, id:'e1'},
	// { username: 'Izik', age: 2, id:'e2' },
	// { username: 'Leon', age: 17, id:'e3' },
];

function App() {
    const [newUserInfo, setNewUserInfo] = useState(usersList),

newUserDataHandler = (newUserData) => {
    setNewUserInfo(prevNewUserInfo => {
        return [newUserData, ...prevNewUserInfo]
    })
}
    
	return (
		<div className='app'>
			<FormPanel onNewUserData={newUserDataHandler} />
			<UsersData  items={newUserInfo}/>
		</div>
	);
}

export default App;
