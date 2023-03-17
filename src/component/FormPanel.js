import React from 'react';
import AppHeader from './AppHeader';
import AppButton from './AppButton';
import Box from './Box';
import './FormPanel.css';

const FormPanel = () => {
	return (
		<Box>
			<AppHeader />
			<form className='form__box'>
				<label for='username' className='form__label'>
					Username:
				</label>
				<input type={'text'} name='username' className='form__input'></input>
				<label for='age' className='form__label'>
					Age (Years):
				</label>
				<input type={'number'} name='age' className='form__input'></input>
			</form>
			<AppButton />
		</Box>
	);
};

export default FormPanel;
