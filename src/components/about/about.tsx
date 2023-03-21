import React from 'react';
import { Header } from '../header';
import { ProblemsSectionMarkup } from '../problemsSection';
import { DescriptionSection } from '../descriptionSection';
import './about.scss';

export const About = () => {
	return (
		<div className='container'>
			<Header />
			<section className='about-container'>
				<h3 className='about-text'>We determine oocyte aneuploidy by non-invasive AI assessment</h3>
				<div className='about-image-container'></div>
			</section>
			<section className='embryos-problem'>
				<h3 className='embryos-problem__header'>Aneuploid embryos problem</h3>
				<ProblemsSectionMarkup />
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
							<img
								alt='google-forms-logo'
								src={require('../../common/assets/icons/googleFormsLogo.svg').default}
							/>
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};
