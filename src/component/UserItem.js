import React from 'react';
import './UserItem.css';

const UserItem = props => {
	return (
		<li className='user__item'>
			<span className='user__item--span'>{props.name}</span> (
			{props.age} Years old)
		</li>
	);
};

export default UserItem;
