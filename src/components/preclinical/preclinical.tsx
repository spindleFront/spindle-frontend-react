import React from 'react';
import './preclinical.scss';

export const Preclinical = () => {
	return (
		<div>
			<div className='preclinical-container'>
				<div className='image-container'>img</div>
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
