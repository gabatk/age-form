import React from 'react';
import Box from './Box';
import './ErrorModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

const ErrorModal = () => {
	return (
		<Box>
			<div>
            <FontAwesomeIcon icon={faTriangleExclamation} style={{color: "#9140d3",}} className='fa-icon'/>
			</div>
			<h2 className='error-title'>An error occured!</h2>
		</Box>
	);
};

export default ErrorModal;
