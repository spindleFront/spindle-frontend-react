import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './tryDemoButton.scss';

export const TryDemoButton: React.FC = () => {
	const navigate = useNavigate();
	const handleTryDemoClick = useCallback(() => navigate('/upload'), []);
	return (
		<button onClick={handleTryDemoClick} className='demo-button'>
			Try Demo
		</button>
	);
};
