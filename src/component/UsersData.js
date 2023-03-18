import React from 'react';
import Box from './Box';
import UserItem from './UserItem';
import './UsersData.css';

const UsersData = (props) => {
	console.log(props.items);
	return (
		<Box>
			<ul className='user__list'>
				{props.items.map(newUser =>  (
				<UserItem name={newUser.username} age={newUser.age} key={newUser.id} />))}
			</ul>
		</Box>
	);
};
    
export default UsersData;
