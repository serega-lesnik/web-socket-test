import React from 'react';

const LogOutButton = ({
	handleLogout,
}) => {

	return (
		<button className='log-button' onClick={handleLogout}>
			Logout
		</button>
	);
};

export default LogOutButton;