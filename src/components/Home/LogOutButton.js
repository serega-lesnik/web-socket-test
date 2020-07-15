import React from 'react';

const LogOutButton = ({
	handleLogout,
}) => {

	return (
		<button className='logout-button' onClick={handleLogout}>
			Logout
		</button>
	);
};

export default LogOutButton;