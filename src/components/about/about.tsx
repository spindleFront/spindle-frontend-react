import React from 'react';
import { Header } from '../header';
import './about.scss';

export const About = () => {
	return (
		<div className='container'>
			<Header />
			<div className='about-container'>
				<h3 className='about-text'>We determine oocyte aneuploidy by non-invasive AI assessment</h3>
				<div className='about-image-container'></div>
			</div>
			<div className='embryos-problem'>
				<h3 className='embryos-problem__header'>Aneuploid embryos problem</h3>
				<div className='problems-container'>
					<div className='terms-card'>
						<div className='terms-card__dark'>
							<div className='terms-card__gradient'>
								<div className='terms-card__solid'>Terms</div>
							</div>
							<div className='terms-card__outer-circle'>
								<img
									alt='image'
									src={require('../../common/assets/icons/termsCircle.svg').default}
								/>
							</div>
						</div>
						<div className='terms-card__small-dot'></div>
						<div className='bottom-chevron'></div>
						<div className='terms-card__bottom-circle'></div>
					</div>
					<div className='numbers-card'>
						<div className='numbers-card__dark'>
							<div className='numbers-card__gradient'>
								<div className='numbers-card__solid'>Numbers</div>
							</div>
							<div className='numbers-card__outer-circle'>
								<img
									alt='image'
									src={require('../../common/assets/icons/numbersCircle.svg').default}
								/>
							</div>
						</div>
						<div className='numbers-card__small-dot'></div>
						<div className='bottom-chevron'></div>
						<div className='numbers-card__bottom-circle'></div>
					</div>

					<div className='landscape-card'>
						<div className='landscape-card__dark'>
							<div className='landscape-card__gradient'>
								<div className='landscape-card__solid'>Landscape</div>
							</div>
							<div className='landscape-card__outer-circle'>
								<img
									alt='image'
									src={require('../../common/assets/icons/landscapeCircle.svg').default}
								/>
							</div>
						</div>
						<div className='landscape-card__small-dot'></div>
						<div className='bottom-chevron'></div>
						<div className='landscape-card__bottom-circle'></div>
					</div>
				</div>
			</div>
		</div>
	);
};
