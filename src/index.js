import React from 'react';
import ReactDOM from 'react-dom';

import LoginProvider from './context/LoginProvider';
import AuthentificatedProvider from './context/AuthentificatedProvider';
import App from './containers/App';

ReactDOM.render(
	<LoginProvider>
		<AuthentificatedProvider>
			<App />
		</AuthentificatedProvider>
	</LoginProvider>,
	document.getElementById('root')
);