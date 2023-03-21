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
		</div>
	);
};
