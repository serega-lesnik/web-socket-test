import React from 'react';

const ConnectedMsg = ({
	connected,
}) => {
	const connectMsg = connected ? 'Connected' : 'Disconnected';
	const className = connected ? 'connect' : 'disconnect'

	return (
		<div className={`home-connect-msg ${className}`}>
			<span>
				{connectMsg}
			</span>
		</div>
	)
};

export default ConnectedMsg;