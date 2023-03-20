import React, { useState } from 'react';
import AppHeader from './AppHeader';
import Box from './Box';
import './FormPanel.css';

const FormPanel = props => {
	const [usernameInput, setusernameInput] = useState('');
	const [ageInput, setAgeInput] = useState('');

	const getUsernameData = event => {
		setusernameInput(event.target.value);
	};
	const getAgeData = event => {
		setAgeInput(event.target.value);
	};

	const submitFormHandler = () => {
		const newUser = {
			username: usernameInput,
			age: ageInput,
			id: Math.random().toString(),
		};
		props.onNewUserData(newUser);
		setusernameInput('');
		setAgeInput('');
	};

	return (
		<Box>
			<AppHeader />
			<form className='form__box'>
				<label htmlFor='username' className='form__label'>
					Username:
				</label>
				<input
					type={'text'}
					id='username'
					value={usernameInput}
					className='form__input'
					onChange={getUsernameData}></input>
				<label htmlFor='age' className='form__label'>
					Age (Years):
				</label>
				<input
					type={'number'}
					value={ageInput}
					className='form__input'
					id='age'
					onChange={getAgeData}></input>
			</form>
			<button type='submit' className='btn' onClick={submitFormHandler}>
				Add User
			</button>
		</Box>
	);
};

export default FormPanel;
