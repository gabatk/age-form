import React, { Fragment, useState } from 'react';
// import React, {Fragment} from 'react'; używamy z zapisem dla react.fragments <fragments> </Fragments>
import FormPanel from './component/FormPanel';
import UsersData from './component/UsersData';
import ErrorModal from './component/ErrorModal';
import Wrapper from './component/Helpers/Wrapper';
import './App.css';

const usersList = [
	// { username: 'Damian', age: 25, id:'e1'},
	// { username: 'Izik', age: 2, id:'e2' },
	// { username: 'Leon', age: 17, id:'e3' },
];

function App() {
	const [newUserInfo, setNewUserInfo] = useState(usersList);
	const [showError, setshowError] = useState();

	const newUserDataHandler = newUserData => {
		setNewUserInfo(prevNewUserInfo => {
			return [newUserData, ...prevNewUserInfo];
		});
	};

	const showErrorModal = errorText => {
		setshowError(errorText);
		console.log(errorText);
	};

	const errorHandler = () => {
		setshowError(null);
		console.log('clicked');
	};

	return (
		<Wrapper>
			{/* <>  */}
			{/* <Fragment> */}
			<div className='app'>
				<FormPanel
					onNewUserData={newUserDataHandler}
					onErrorInfo={showErrorModal}
				/>
				<UsersData items={newUserInfo} />
			</div>
			<div className='app error-modal'>
				{showError && (
					<ErrorModal
						title={showError.title}
						message={showError.message}
						onConfirm={errorHandler}
					/>
				)}
			</div>
			{/* </Fragment> */}
			{/* </> */}
		</Wrapper>
	);
}

{
	/* <> </>  Stosowane w momencie importowania tylko React */
}
{	/* <Fragment> </Fragment> Stosowane w momencie importu React i 'Fragment' */}

export default App;
