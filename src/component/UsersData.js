import React from 'react';
import Box from './Box';
import UserItem from './UserItem';
import './UsersData.css';

const UsersData = props => {
	return (
		<Box>
			<ul className='user__list'>
				{props.items.length === 0 && (
					<p className='user__list--empty'>User list is empty</p>
				)}
				{props.items.length > 0 &&
					props.items.map(newUser => (
						<UserItem
							name={newUser.username}
							age={newUser.age}
							key={newUser.id}
						/>
					))}
			</ul>
		</Box>
	);
};
export default UsersData;
