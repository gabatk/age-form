import React from 'react';
import Box from './Box';
import './ErrorModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ErrorModal = () => {
	return (
		<Box>
			<div>
				{/* <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" style={{color: "#f43c6d",}} /> */}
			</div>
			<h2>An error occured!</h2>
		</Box>
	);
};

export default ErrorModal;
