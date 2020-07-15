import React from 'react';

import HomeComponent from '../components/Home';
import { logOut } from '../reducer/actions/loginActions';

const Home = ({
	loginDispatch
}) => {

	const handleLogout = () => {
		logOut()(loginDispatch);
	};

	return (
		<HomeComponent
			loginDispatch={loginDispatch}
			handleLogout={handleLogout}
		/>
		
	);
};

export default Home;