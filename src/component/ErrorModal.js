import React from 'react';
import Box from './Box';
import Button from './Button';
import './ErrorModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

const ErrorModal = (props) => {
	return (
        <div>
        <div className='backdrop'></div>
		<Box className='error-box'>
			<div>
            <FontAwesomeIcon icon={faTriangleExclamation} style={{color: "#6c4394",}} className='fa-icon'/>
			</div>
			<h2 className='error-title'>{props.title}</h2>
            <p className='error-message'>{props.message}</p>
			{/* <h2 className='error-title'>An error occured!</h2>
            <p className='error-message'>Something went wrong, please check the data you entered.</p> */}
            <Button className=''>Cancel</Button>
		</Box>
        </div>
	);
};

export default ErrorModal;
