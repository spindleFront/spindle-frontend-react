import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';

export const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
	<QueryClientProvider client={queryClient}>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</QueryClientProvider>
);
