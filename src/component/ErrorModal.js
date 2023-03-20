import React from 'react';
import Box from './Box';
import Button from './Button';
import './ErrorModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

const ErrorModal = () => {
	return (
		<Box className='error-box'>
			<div>
            <FontAwesomeIcon icon={faTriangleExclamation} style={{color: "#9140d3",}} className='fa-icon'/>
			</div>
			<h2 className='error-title'>An error occured!</h2>
            <p className='error-text'>Something went wrong, please check the data you entered.</p>
            <Button>Cancel</Button>
		</Box>
	);
};

export default ErrorModal;
