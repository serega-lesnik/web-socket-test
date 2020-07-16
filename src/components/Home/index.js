import React from 'react';

import LogOutButton from './LogOutButton';
import ConnectedMsg from './ConnectedMsg';
import ShowMessage from './ShowMessage';

const HomeComponent = ({
	connected,
	lastMessage,
	handleLogout,
}) => {

	return (
		<div>
			<LogOutButton handleLogout={handleLogout} />
			<ConnectedMsg connected={connected} />
			<ShowMessage lastMessage={lastMessage} />
		</div>
	);
};

export default HomeComponent;