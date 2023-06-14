import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './components/privateRoute';
import { ROUTES } from './common/constants/routes';
import './App.scss';

function App() {
	return (
		<div className='container'>
			<Routes>
				{ROUTES.map(({ path, element, hidden }) =>
					hidden ? (
						<Route key={path} path={path} element={<PrivateRoute />}>
							<Route element={element} path={path} />
						</Route>
					) : (
						<Route key={path} path={path} element={element} />
					)
				)}
			</Routes>
		</div>
	);
}

export default App;
