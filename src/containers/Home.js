import React, { useEffect, useState } from 'react';

import HomeComponent from '../components/Home';
import { logOut } from '../reducer/actions/loginActions';
import {
	socketSubscribe,
	socketConnected,
	socketDisconnected,
	socketMessage,
} from '../reducer/actions/socketAction';

const Home = ({
	url,
	connected,
	lastMessage,
	wsDispatch,
	loginDispatch,
}) => {
	const [ ws, setWs ] = useState(null);
	// const [ countTry, setCount ] = useState(0);

	useEffect(() => {
		const cbError = code => {
			if (code == '401' || code == '400') {
				handleLogout();
			} // else {} // reSubscribe with countTry
		};
		if (!connected) {
			socketSubscribe(cbError)(wsDispatch);
		}
	}, [ connected ]);

	useEffect(() => {
		if (url && !connected) {
			const wsClient = new WebSocket(url);
			wsClient.onopen = () => {
				socketConnected()(wsDispatch);
				setWs(wsClient);
			};
			wsClient.onclose = () => {
				socketDisconnected()(wsDispatch);
				setWs(null);
			};
			wsClient.onerror = () => {
				socketDisconnected()(wsDispatch);
				setWs(null);
			};
		}
	}, [ url, connected ]);

	useEffect(() => {
		if (!ws) return;
		ws.onmessage = e => {
			const message = JSON.parse(e.data);
			socketMessage(message)(wsDispatch);
		}
	}, [ ws ]);

	const handleLogout = () => {
		logOut()(loginDispatch);
		if (!ws) return;
		ws.close();
		socketDisconnected()(wsDispatch);
		setWs(null);
	};

	const state = {
		connected,
		lastMessage,
	};

	return (
		<HomeComponent
			{...state}
			handleLogout={handleLogout}
		/>
	);
};

export default Home;