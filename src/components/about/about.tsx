import React from 'react';
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

			<section className='three-cards'>
				<div className='three-cards__container'>
					<div className='three-cards__card'>
						<div className='three-cards__card-header'>Aneuploid embryos is a big problem</div>
						<div className='three-cards__card-main'>
							Aneuploid embryo has chromosomal pathologies
						</div>
						<div className='three-cards__card-main-footer'>95% of them doesn’t survive</div>
					</div>

					<div className='three-cards__card'>
						<div className='three-cards__card-header'>There are a lot of them</div>
						<div className='three-cards__card-main'>Aneuploid embryo rate for women age:</div>
						<div className='three-cards__card-footer'>
							<span className='three-cards__card-footer-yellow'>25-30 - 40%</span>
							<br />
							<span className='three-cards__card-footer-red'> 40+ - 90%</span>
						</div>
					</div>

					<div className='three-cards__card'>
						<div className='three-cards__card-header'>
							There are no accessible ways to find them
						</div>
						<div className='three-cards__card-main'>
							98% of women can not afford genetic diagnostics of their embryos due to price and
							restrictions
						</div>
						<div className='three-cards__card-footer'>
							<span className='three-cards__card-footer-red'>
								Assisted reproduction is a lottery for them
							</span>
						</div>
					</div>
				</div>
			</section>

			<section className='our-technology'>
				<div className='technology-schema'></div>
				<div className='our-technology__markup-container'>
					<div className='our-technology__text'>
						Our <br /> technology
					</div>
					<TryDemoButton />
				</div>
			</section>

			<section className='hiw'>
				<div className='hiw__header'>How it works</div>
				<div className='hiw__main-grid'>
					<div className='hiw__main-grid-left'>
						<div className='hiw__main-grid-left-images'>
							<div className='hiw__main-grid-left-subContainer'>
								<div className='hiw__main-grid-left-image-1'></div>
								<div className='hiw__main-grid-left-text-euploid'>Euploid</div>
							</div>
							<div className='hiw__main-grid-left-subContainer'>
								<div className='hiw__main-grid-left-image-2'></div>
								<div className='hiw__main-grid-left-text-aneuploid'>Aneuploid</div>
							</div>
						</div>

						<div className='hiw__main-grid-left-footer'>ReSpindle AI classified spindles</div>
						<div className='hiw__main-grid-left-footer'>Results validated by NGS</div>
					</div>

					<div className='hwt__main-grid-right'></div>
				</div>
			</section>
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
