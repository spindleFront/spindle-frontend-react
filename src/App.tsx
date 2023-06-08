import React, { ReactElement } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { UploadPhotoPage } from './components/uploadPhotoPage';
import { AneuploidyDetection } from './components/aneuploidyDetection';
import { Preclinical } from './components/preclinical';
import { About } from './components/about';
import { ROUTE_NAMES } from './common/enums/routeNames';
import { SignIn } from './components/signIn';
import { Header } from './components/header';
import './App.scss';

interface Routes {
	path: ROUTE_NAMES;
	element: ReactElement;
}

const ROUTES: Routes[] = [
	{ path: ROUTE_NAMES.UPLOAD, element: <UploadPhotoPage /> },
	{
		path: ROUTE_NAMES.DETECTION,
		element: <AneuploidyDetection />,
	},
	{
		path: ROUTE_NAMES.PRECLINICAL,
		element: <Preclinical />,
	},
	{
		path: ROUTE_NAMES.HOME,
		element: <About />,
	},
	{
		path: ROUTE_NAMES.SIGN_IN,
		element: <SignIn />,
	},
];

function App() {
	const location = useLocation();
	return (
		<div className='container'>
			{!location.pathname.includes(ROUTE_NAMES.UPLOAD) ||
				(!location.pathname.includes(ROUTE_NAMES.SIGN_IN) && <Header />)}
			<Routes>
				{ROUTES.map(({ path, element }) => (
					<Route key={path} path={path} element={element} />
				))}
			</Routes>
		</div>
	);
}

export default App;
