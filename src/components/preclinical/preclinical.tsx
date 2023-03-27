import React from 'react';
import { queryClient } from '../../index';
import './preclinical.scss';

export const Preclinical = () => {
	const queryCache = queryClient.getQueryCache().getAll();

	return (
		<div>
			<div className='preclinical-container'>
				<div
					className='image-container'
					style={{ backgroundImage: `url(${queryCache.length && queryCache[0].state.data})` }}
				></div>
				<div className='preclinical-info'>
					<h3 className='warning-text'>
						Module in development, leave your contact to stay updated
					</h3>
					<div className='button-container'>
						<button className='contact-us-button'>Contact us</button>
					</div>
				</div>
			</div>
		</div>
	);
};
