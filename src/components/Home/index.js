import React from 'react';

import LogOutButton from './LogOutButton';

const HomeComponent = ({
	handleLogout,
}) => {

	return (
		<div>
			<LogOutButton handleLogout={handleLogout} />
			Home page
		</div>
	);
};

export default HomeComponent;