import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_NAMES } from '../../common/enums/routeNames';
import './tryDemoButton.scss';

export const TryDemoButton: React.FC = () => {
	const navigate = useNavigate();
	const handleTryDemoClick = useCallback(() => navigate(ROUTE_NAMES.UPLOAD), []);
	return (
		<button onClick={handleTryDemoClick} className='demo-button'>
			Try Demo
		</button>
	);
};
