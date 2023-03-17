import React from 'react';
import Box from './Box';
import UserItem from './UserItem';
import './UsersData.css';

const UsersData = (props) => {
	return (
		<Box>
			<ul className='user__list'>
				<UserItem pasteUsername={props.usernameValue} pasteUserAge={props.userAgeValue}/>
			</ul>
		</Box>
	);
};

export default UsersData;
