import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { UploadPhotoPage } from './components/uploadPhotoPage';
import { AneuploidyDetection } from './components/aneuploidyDetection';
import './index.scss';

const router = createBrowserRouter([
	{ path: '/', element: <UploadPhotoPage /> },
	{
		path: '/detection',
		element: <AneuploidyDetection />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
