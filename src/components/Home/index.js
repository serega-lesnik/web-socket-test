import React from 'react';

import LogOutButton from './LogOutButton';
import ConnectedMsg from './ConnectedMsg';
import ShowMessage from './ShowMessage';

import './home.css';

const HomeComponent = ({
	connected,
	lastMessage,
	handleLogout,
}) => {

	return (
		<div className='container'>
			<div className='container-panel home'>
				<div className='home-header'>
					<ConnectedMsg connected={connected} />
					<LogOutButton handleLogout={handleLogout} />
				</div>
				<ShowMessage lastMessage={lastMessage} />
			</div>
		</div>
	);
};

export default HomeComponent;