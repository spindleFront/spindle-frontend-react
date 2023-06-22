import React, { useContext, useEffect, useMemo } from 'react';
import { Header } from '../header';
import { Link } from 'react-router-dom';
import { ROUTE_NAMES } from '../../common/enums/routeNames';
import { queryClient } from '../../index';
import { FileContext } from '../../common/context/context';
import './euploidResult.scss';

export const EuploidResult = () => {
	const mutationCache = queryClient.getMutationCache().getAll();
	const { file, oocyteData } = useContext(FileContext);

	const isSpindleDetected = useMemo(() => {
		if (mutationCache.length > 0) {
			// @ts-ignore
			return Object.keys(mutationCache[0].state.data?.data).length > 0;
		}
	}, [mutationCache]);

	useEffect(() => {
		return () => {
			queryClient.clear();
		};
	}, []);

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
					<div className='oocyteForm__uploadContainer'>
						<div
							style={{
								borderColor: isSpindleDetected
									? 'rgba(66, 232, 224, 0.7)'
									: 'rgba(213, 54, 91, 0.7)',
								backgroundImage: `url(${file})`,
							}}
							className='oocyteForm__dropArea'
						></div>
					</div>

					<div className='oocyteForm__oocyte-description'>
						<div className='oocyteForm__form'>
							<div className='oocyteForm__form-container'>
								<div className='oocyteForm__form-item'>
									<div className='oocyteForm__form-item-label'>
										<div className='formItem-1'></div>
										<div className='oocyteForm__form-item-text'>Patient ID</div>
									</div>
									<div className='response-data-container'>{oocyteData?.patientID}</div>
								</div>

								<div className='oocyteForm__form-item'>
									<div className='oocyteForm__form-item-label'>
										<div className='formItem-2'></div>
										<div className='oocyteForm__form-item-text'>Entity Date</div>
									</div>
									<div className='response-data-container'>{oocyteData?.entityDate}</div>
								</div>

								<div className='oocyteForm__form-item'>
									<div className='oocyteForm__form-item-label'>
										<div className='formItem-3'></div>
										<div className='oocyteForm__form-item-text'>Oocyte ID</div>
									</div>
									<div className='response-data-container'>{oocyteData?.oocyteId}</div>
								</div>

								<div className='oocyteForm__form-item'>
									<div className='oocyteForm__form-item-label'>
										<div className='formItem-4'></div>
										<div className='oocyteForm__form-item-text'>Oocyte Age</div>
									</div>
									<div className='response-data-container'>{oocyteData?.oocyteAge}</div>
								</div>
							</div>
							<div className='oocyteForm__form-button-container'>
								{isSpindleDetected ? (
									<div className='euploid-img'></div>
								) : (
									<div className='aneuploid-img'></div>
								)}
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};
