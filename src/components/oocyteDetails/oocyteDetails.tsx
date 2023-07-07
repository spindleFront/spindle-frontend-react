import React, { useContext, useMemo } from 'react';
import { Header } from '../header';
import { Link, useSearchParams } from 'react-router-dom';
import { ROUTE_NAMES } from '../../common/enums/routeNames';
import { markupOfDetection } from '../../common/helpers/markupOfDetection';
import { FileContext } from '../../common/context/context';
import { SPINDLE_EUPLOIDY } from '../../common/enums/spindleEuploidy';
import './oocyteDetails.scss';

export const OocyteDetails = () => {
	const { contextOocytesList } = useContext(FileContext);
	const [searchParams] = useSearchParams();
	const id = searchParams.get('id');
	const oocyteDetails = useMemo(() => {
		if (contextOocytesList) {
			// @ts-ignore
			return contextOocytesList.find((item) => item?.photoId === id);
		}
	}, [contextOocytesList]);

	const borderColor = useMemo(() => {
		const aneuploid = oocyteDetails?.aneuploid;
		if (aneuploid === SPINDLE_EUPLOIDY.ANEUPLOID) {
			return 'rgba(213, 54, 91, 0.7)';
		}
		if (aneuploid === SPINDLE_EUPLOIDY.UEPLOID) {
			return 'rgba(66, 232, 224, 0.7)';
		}
		return 'rgba(245, 149, 27, 1)';
	}, [oocyteDetails]);

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
							backgroundImage: `url(${oocyteDetails?.image})`,
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
									<div className='response-data-container'>{oocyteDetails?.patientID}</div>
								</div>

								<div className='result__form-item'>
									<div className='result__form-item-label'>
										<div className='formItem-3'></div>
										<div className='result__form-item-text'>Oocyte Number</div>
									</div>
									<div className='response-data-container'>{oocyteDetails?.oocyteNumber}</div>
								</div>

								<div className='result__form-item'>
									<div className='result__form-item-label'>
										<div className='formItem-4'></div>
										<div className='result__form-item-text'>Oocyte Age</div>
									</div>
									<div className='response-data-container'>{oocyteDetails?.oocyteAge}</div>
								</div>
							</div>
							<div className='oocyteForm__form-button-container'>
								{markupOfDetection(oocyteDetails?.aneuploid as SPINDLE_EUPLOIDY)}
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};
