import React from 'react';
import './descriptionSection.scss';

export const DescriptionSection = () => {
	return (
		<section>
			<h3 className='description'>
				ReSpindle is a complex AI technology in a four-step web interface <br /> for assisted
				reproduction clinics
			</h3>
			<div className='description-container'>
				<div className='description-card'>
					<div className='description-card__image step-1'></div>
					<div className='description-card__step-name'>Screen</div>
					<div className='description-card__step-description'>
						Embryologist makes photos of patient’s oocytes in polarized light
					</div>
				</div>
				<div className='description-card'>
					<div className='description-card__image step-2'></div>
					<div className='description-card__step-name'>Upload</div>
					<div className='description-card__step-description'>Uploads photos to our server</div>
				</div>
				<div className='description-card'>
					<div className='description-card__image step-3'></div>
					<div className='description-card__step-name'>Analyze</div>
					<div className='description-card__step-description'>
						AI analyzes spindles shapes, gives aneuploidy probability for each oocyte
					</div>
				</div>
				<div className='description-card'>
					<div className='description-card__image step-4'></div>
					<div className='description-card__step-name'>Select</div>
					<div className='description-card__step-description'>
						Oocytes with low aneuploidy probability are selected for priority transfer
					</div>
				</div>
			</div>
		</section>
	);
};
