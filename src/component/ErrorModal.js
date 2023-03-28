import React from 'react';
// import React, {Fragment} from 'react'; używamy z zapisem dla react.fragments
import ReactDOM from 'react-dom';
import Box from './Box';
import Button from './Button';
import './ErrorModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const Backdrop = props => {
	return <div className='backdrop' onClick={props.onConfirm}></div>;
};

const ModalOverlay = props => {
	return (
		<Box className='error-box'>
			<div>
				<FontAwesomeIcon
					icon={faTriangleExclamation}
					style={{ color: '#6c4394' }}
					className='fa-icon'
				/>
			</div>
			<h2 className='error-title'>{props.title}</h2>
			<p className='error-message'>{props.message}</p>
			<Button className='' onClick={props.onConfirm}>
				Cancel
			</Button>
		</Box>
	);
};

// const ErrorModal = props => {
// 	return (
// 		<React.Fragment>
// 			<div className='backdrop' onClick={props.onConfirm}></div>
// 			<Box className='error-box'>
// 				<div>
// 					<FontAwesomeIcon
// 						icon={faTriangleExclamation}
// 						style={{ color: '#6c4394' }}
// 						className='fa-icon'
// 					/>
// 				</div>
// 				<h2 className='error-title'>{props.title}</h2>
// 				<p className='error-message'>{props.message}</p>
// 				<Button className='' onClick={props.onConfirm}>
// 					Cancel
// 				</Button>
// 			</Box>
// 		</React.Fragment>
// 	);
// };

// poniżej react portal:
const ErrorModal = props => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<Backdrop onConfirm={props.onConfirm} />,
				document.getElementById('backdrop-root')
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					title={props.title}
					message={props.message}
					onConfirm={props.onConfirm}
				/>,
				document.getElementById('overlay-root')
			)}
		</React.Fragment>
	);
};

export default ErrorModal;
