import React from 'react';
import './UserItem.css';

const UserItem = props => {
	return (
		<li className='user__item'>
			<span className='user__item--span'>{props.pasteUsername}</span> (
			{props.pasteUserAge})
		</li>
	);
};

export default UserItem;
