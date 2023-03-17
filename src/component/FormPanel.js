import React from 'react';
import AppHeader from './AppHeader';
import Box from './Box';
import './FormPanel.css';

const FormPanel = () => {
	const submitFormHandler = event => {
		// event.preventDefault();
		console.log('submitted');
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
					className='form__input'></input>
				<label htmlFor='age' className='form__label'>
					Age (Years):
				</label>
				<input
					type={'number'}
					name='age'
					className='form__input'
					id='age'></input>
			</form>
			<button type='submit' className='btn' onClick={submitFormHandler}>
				Add User
			</button>
		</Box>
	);
};

export default FormPanel;
