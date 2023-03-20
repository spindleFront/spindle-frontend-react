import React from 'react';
import { Logo } from '../logo';
import { TryDemoButton } from '../tryDemoButton';
import './aneuploidyDetection.scss';

export const AneuploidyDetection = () => {
	return (
		<div className='container'>
			<div className='header-container'>
				<div>
					<Logo />
				</div>
				<div>
					<TryDemoButton />
				</div>
			</div>
			<div className='info-container'>
				<div className='image-container'>img</div>
				<div className='info'>
					<h3 className='info__header'> Spindle detected </h3>
					<p className='info__description'>
						It assembles around the chromosomes and distributes the duplicated genome to the
						daughter cells during mitosis.
					</p>
					<ul className='info__list'>
						<li className='info__list--item'>
							<div className='info__list--circle'>
								<div className='info__list--circle--number'>1</div>
							</div>
							<p className='info__list--text'>
								Spindles are different between euploid and aneuploid oocytes
							</p>
						</li>
						<li className='info__list--item'>
							<div className='info__list--circle'>
								<div className='info__list--circle--number'>2</div>
							</div>
							<p className='info__list--text'>
								Visual assessment of oocytes’ spindles can predict aneuploidy
							</p>
						</li>
						<li className='info__list--item'>
							<div className='info__list--circle'>
								<div className='info__list--circle--number'>3</div>
							</div>
							<p className='info__list--text'>ReSpindle’s AI can automate aneuploidy prediction</p>
						</li>
					</ul>
					<div className='check-button-container'>
						<button className='check-button'>Check aneuploidy status</button>
					</div>
				</div>
			</div>
		</div>
	);
};
