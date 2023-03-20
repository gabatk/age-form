import React, { useState } from 'react';
import AppHeader from './AppHeader';
import Box from './Box';
import Button from './Button';
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

	const submitFormHandler = event => {
		event.preventDefault();
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
			<form onSubmit={submitFormHandler} className='form__box'>
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
				<Button type='submit'>Add User</Button>
			</form>
		</Box>
	);
};

export default FormPanel;
