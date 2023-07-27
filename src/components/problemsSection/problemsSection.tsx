import React from 'react';
import './problemsSection.scss';

export const ProblemsSectionMarkup = () => {
	return (
		<div className='problems-container'>
			<div className='terms-card'>
				<div className='terms-card__dark'>
					<div className='terms-card__gradient'>
						<div className='terms-card__solid'>Screen</div>
					</div>
					<div className='terms-card__outer-circle'>
						<img alt='image' src={require('../../common/assets/icons/termsCircle.svg').default} />
					</div>
				</div>
				<div className='terms-card__arrow'></div>
				<div className='terms-card__small-dot'></div>
				<div className='bottom-chevron'>
					<div>
						During the embryologist's work ReSpindle uploads images of oocytes to the server in
						real-time
					</div>
				</div>
				<div className='terms-card__bottom-circle'></div>
			</div>

			{/*second card*/}

			<div className='terms-card'>
				<div className='terms-card__dark'>
					<div className='terms-card__gradient'>
						<div className='terms-card__solid'>Analyze</div>
					</div>
					<div className='terms-card__outer-circle'>
						<img alt='image' src={require('../../common/assets/icons/termsCircle.svg').default} />
					</div>
				</div>
				<div className='terms-card__arrow'></div>
				<div className='terms-card__small-dot'></div>
				<div className='bottom-chevron'>
					<div> AI analyzes spindles shapes, gives probability of aneuploidy for each oocyte</div>
				</div>
				<div className='terms-card__bottom-circle'></div>
			</div>

			{/*third card*/}

			<div className='terms-card'>
				<div className='terms-card__dark'>
					<div className='terms-card__gradient'>
						<div className='terms-card__solid'>Select</div>
					</div>
					<div className='terms-card__outer-circle-draw'></div>
				</div>
				<div className='terms-card__small-dot'></div>
				<div className='bottom-chevron'>
					<div>Oocytes with low probability of aneuploidy are selected for priority transfer</div>
				</div>
				<div className='terms-card__bottom-circle'></div>
			</div>
		</div>
	);
};
