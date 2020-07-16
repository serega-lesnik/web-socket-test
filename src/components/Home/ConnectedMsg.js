import React from 'react';

const ConnectedMsg = ({
	connected,
}) => {
	const connectMsg = connected ? 'Connected' : 'Disconnected';

	return (
		<div className='home-connect-msg'>
			<span>
				{connectMsg}
			</span>
		</div>
	)
};

export default ConnectedMsg;