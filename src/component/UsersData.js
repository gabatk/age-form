import React from 'react';
import Box from './Box';
import './UsersData.css';

const UsersData = () => {
	return (
		<Box>
			<ul className='user__list'>
                <li className='user__item'><span className='user__item--span'>Damian</span> (25 years old)</li>
                <li className='user__item'><span className='user__item--span'>Izik</span> (2 years old)</li>
                <li className='user__item'><span className='user__item--span'>Dragomir</span> (43 years old)</li>
            </ul>
		</Box>
	);
};

export default UsersData;
