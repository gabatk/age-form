import React from 'react';
import Box from './Box';
import UserItem from './UserItem';
import './UsersData.css';

const UsersData = () => {
	return (
		<Box>
			<ul className='user__list'>
				<UserItem />
			</ul>
		</Box>
	);
};

export default UsersData;
