import React from 'react';

import { formattedDate } from '../../utils/dateUtils';

const ShowMessage = ({ lastMessage }) => {
	const getValue = () => {
		if (lastMessage && typeof lastMessage === 'object' && lastMessage.server_time) {
			return formattedDate(
				Number(lastMessage.server_time) * 1000
			);
		}
		return '';
	};

	return (
		<div>
			{getValue()}
		</div>
	)
};

export default ShowMessage;