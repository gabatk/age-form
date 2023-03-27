import React, { useState } from 'react';
import AppHeader from './AppHeader';
import Box from './Box';
import Button from './Button';
import './FormPanel.css';

const FormPanel = props => {
	const [usernameInput, setusernameInput] = useState('');
	const [ageInput, setAgeInput] = useState('');
	const [error, setError] = useState();

	const getUsernameData = event => {
		setusernameInput(event.target.value);
	};
	const getAgeData = event => {
		setAgeInput(event.target.value);
	};

	const submitFormHandler = event => {
		event.preventDefault();
		console.log(usernameInput);
		console.log(ageInput);

				if (usernameInput.trim().length === 0 && +ageInput <1) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age.',
			});
			props.onErrorInfo(error);
			return
		} else if (
			usernameInput.trim().length === 0 &&
			ageInput.trim().length != 0
		) {
			setError({
				title: 'Invalid username',
				message: 'Please enter a valid name.',
			});
			props.onErrorInfo(error);
			return
		} else if (+ageInput <1) {
			setError({
				title: 'Invalid age',
				message: 'Please enter a valid age (> 0).',
			});
			props.onErrorInfo(error);
			return
		} 
			const newUser = {
				username: usernameInput,
				age: ageInput,
				id: Math.random().toString(),
			};
			props.onNewUserData(newUser);
			// props.onErrorInfo(error);
			setusernameInput('');
			setAgeInput('');
		
	};

	return (
		<Box className=''>
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
				<Button classname='' type='submit'>
					Add User
				</Button>
			</form>
		</Box>
	);
};

export default FormPanel;
