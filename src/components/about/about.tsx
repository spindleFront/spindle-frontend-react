import React from 'react';
import { DescriptionSection } from '../descriptionSection';
import { Header } from '../header';
import { TryDemoButton } from '../tryDemoButton';
import './about.scss';

export const About = () => {
	return (
		<div>
			<Header />
			<section className='about-container'>
				<div className='about-container-text'>
					<h3 className='about-text'>
						We determine oocyte aneuploidy by non-invasive AI assessment
					</h3>
					<TryDemoButton />
				</div>
				<div className='about-image-container'></div>
			</section>
			<section className='embryos-problem'>
				<div className='embryos-problem__container'>
					<div className='embryos-problem__text'>
						In our fast-paced world women dedicate young years to self-realization, postponing
						motherhood
					</div>

					<div className='embryos-problem__text'>
						When the long-awaited chance to have a baby arrives the body may whisper <br />
						<span className='embryos-problem__text-warning'>"It's too late"</span>
					</div>

					<div className='embryos-problem__text'>Can anything be done to stop this fate?</div>
				</div>
				<div className='embryos-problem__footer'>
					<div className='embryos-problem__footer-textContainer'>
						<div className='embryos-problem__logo'></div>
						<div className='embryos-problem__does'>does</div>
					</div>

					<TryDemoButton />
				</div>
			</section>
			<section className='our-technology'>
				<h3 className='embryos-problem__header'>Our technology is a solution</h3>
				<div className='technology-schema'></div>
			</section>
			<DescriptionSection />
			<section className='contact-us'>
				<h3 className='embryos-problem__header'>Contact us</h3>
				<div className='contact-us__container'>
					<div className='contact-us__item'>
						<a target='_blank' href='https://calendly.com/respindle'>
							<img
								alt='calendly-logo'
								src={require('../../common/assets/icons/calendlyLogo.svg').default}
							/>
						</a>
					</div>
					<div className='contact-us__item'>
						<a className='google-link' target='_blank' href='https://forms.gle/vEgpfBNBKZDiBSuu9'>
							Google Form
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};
