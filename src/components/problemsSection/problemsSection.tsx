import React from 'react';
import './problemsSection.scss';

export const ProblemsSectionMarkup = () => {
	return (
		<div className='problems-container'>

			//Terms card

			<div className='terms-card'>
				<div className='terms-card__dark'>
					<div className='terms-card__gradient'>
						<div className='terms-card__solid'>Terms</div>
					</div>
					<div className='terms-card__outer-circle'>
						<img alt='image' src={require('../../common/assets/icons/termsCircle.svg').default}/>
					</div>
				</div>
				<div className='terms-card__small-dot'></div>
				<div className='bottom-chevron'>
					<ul className='chevron-list'>
						<li className='chevron-list__item'>Oocyte - female reproductive cell</li>
						<li className='chevron-list__item'>
							Aneuploid oocyte - oocyte with chromosomal pathologies
						</li>
						<li>Aneuploid oocyte makes aneuploid embryo</li>
					</ul>
				</div>
				<div className='terms-card__bottom-circle'></div>
			</div>

			//Numbers Card

			<div className='numbers-card'>
				<div className='numbers-card__dark'>
					<div className='numbers-card__gradient'>
						<div className='numbers-card__solid'>Numbers</div>
					</div>
					<div className='numbers-card__outer-circle'>
						<img alt='image' src={require('../../common/assets/icons/numbersCircle.svg').default}/>
					</div>
				</div>
				<div className='numbers-card__small-dot'></div>
				<div className='bottom-chevron'>
					<ul className='chevron-list'>
						<li className='chevron-list__item'>Aneuploid embryo rate for women age:</li>
						<li className='chevron-list__item no-style'>
							25-30 - 25% <br/> 40+ - 90%
						</li>
						<li> 95% of aneuploid embryo doesn’t survive</li>
					</ul>
				</div>
				<div className='numbers-card__bottom-circle'></div>
			</div>

			// Landscape card

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
				<div className='bottom-chevron'>
					<ul className='chevron-list two-rows'>
						<li className='chevron-list__item'>Only 2% use aneuploid embryo diagnostic (PGT-A)</li>
						<li className='chevron-list__item'>The rest 98% don’t know their embryo status</li>
						<li className='chevron-list__item no-style text-center'>They play a lottery</li>
					</ul>
				</div>
				<div className='landscape-card__bottom-circle'></div>
			</div>
		</div>
	);
};
