import React from 'react';
import { Header } from '../header';
import { Link } from 'react-router-dom';
import { ROUTE_NAMES } from '../../common/enums/routeNames';
import { useResultHook } from '../../common/hooks/useResult';
import { markupOfDetection } from '../../common/helpers/markupOfDetection';
import './euploidResult.scss';

export const EuploidResult = () => {
	const { file, oocyteData, isSpindleDetected, borderColor } = useResultHook();

	return (
		<>
			<Header />
			<main className='oocyteForm__main'>
				<div className='oocyteForm__back-link-container'>
					<Link className='oocyteForm__backButton' to={ROUTE_NAMES.OOCYTES_LIST}>
						<div className='oocyteForm__backButton-arrow'>
							<img
								alt='Image of arrow'
								src={require('../../common/assets/icons/leftArrow.svg').default}
							/>
						</div>
						<div> Back to the Oocytes list</div>
					</Link>
				</div>
				<div className='oocyteForm__main-container'>
					<div
						className='result__uploadContainer'
						style={{
							borderColor: borderColor,
							backgroundImage: `url(${file})`,
						}}
					></div>
					<div className='oocyteForm__oocyte-description'>
						<div className='oocyteForm__form'>
							<div className='result__form-container'>
								<div className='result__form-item'>
									<div className='result__form-item-label'>
										<div className='formItem-1'></div>
										<div className='result__form-item-text'>Patient ID</div>
									</div>
									<div className='response-data-container'>{oocyteData?.patientID}</div>
								</div>

								<div className='result__form-item'>
									<div className='result__form-item-label'>
										<div className='formItem-3'></div>
										<div className='result__form-item-text'>Oocyte Number</div>
									</div>
									<div className='response-data-container'>{oocyteData?.oocyteNumber}</div>
								</div>

								<div className='result__form-item'>
									<div className='result__form-item-label'>
										<div className='formItem-4'></div>
										<div className='result__form-item-text'>Oocyte Age</div>
									</div>
									<div className='response-data-container'>{oocyteData?.oocyteAge}</div>
								</div>
							</div>
							<div className='oocyteForm__form-button-container'>
								{markupOfDetection(isSpindleDetected)}
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};
