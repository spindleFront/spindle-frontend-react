import React from 'react';
import { Header } from '../header';
import { ProblemsSectionMarkup } from '../problemsSection';
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
				<ProblemsSectionMarkup />
			</div>
		</div>
	);
};
