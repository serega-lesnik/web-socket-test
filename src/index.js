import React from 'react';
import ReactDOM from 'react-dom';

import LoginProvider from './context/LoginProvider';
import App from './containers/App';

ReactDOM.render(
	<LoginProvider>
		<App />
	</LoginProvider>,
	document.getElementById('root')
);