import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.scss';
import { UploadPhotoPage } from './components/uploadPhotoPage';

const router = createBrowserRouter([{ path: '/', element: <UploadPhotoPage /> }]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
