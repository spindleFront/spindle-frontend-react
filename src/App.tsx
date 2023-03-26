import React, { ReactElement } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { UploadPhotoPage } from './components/uploadPhotoPage';
import { AneuploidyDetection } from './components/aneuploidyDetection';
import { Preclinical } from './components/preclinical';
import { About } from './components/about';
import { Header } from './components/header';
import './App.scss';

interface Routes {
	path: string;
	element: ReactElement;
}

const ROUTES: Routes[] = [
	{ path: '/upload', element: <UploadPhotoPage /> },
	{
		path: '/detection',
		element: <AneuploidyDetection />,
	},
	{
		path: '/preclinical',
		element: <Preclinical />,
	},
	{
		path: '/',
		element: <About />,
	},
];

function App() {
	const location = useLocation();
	return (
		<div className='App'>
			<div className='container'>
				{!location.pathname.includes('upload') && <Header />}
				<Routes>
					{ROUTES.map(({ path, element }) => (
						<Route key={path} path={path} element={element} />
					))}
				</Routes>
			</div>
		</div>
	);
}

export default App;
