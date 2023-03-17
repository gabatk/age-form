import React, { useState } from 'react';
import AppHeader from './AppHeader';
import Box from './Box';
import './FormPanel.css';

const FormPanel = () => {
	const [usernameInput, setusernameInput] = useState('');
	const [ageInput, setageInput] = useState('');

	const getUsernameData = event => {
		setusernameInput(event.target.value);
	};
	const getAgeData = event => {
		setageInput(event.target.value);
	};

	const submitFormHandler = () => {
		const newObject = [{ username: usernameInput, age: ageInput }];
		console.log(usernameInput);
		console.log(ageInput);
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
					name='username'
					id='username'
					className='form__input'
					onChange={getUsernameData}></input>
				<label htmlFor='age' className='form__label'>
					Age (Years):
				</label>
				<input
					type={'number'}
					name='age'
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
