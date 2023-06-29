import React, { useMemo } from 'react';
import { Header } from '../header';
import { Link } from 'react-router-dom';
import { ROUTE_NAMES } from '../../common/enums/routeNames';
import { useResultHook } from '../../common/hooks/useResult';
import { SPINDLE_EUPLOIDY } from '../../common/enums/spindleEuploidy';
import './noRegistrationResult.scss';

export const NoRegistrationResult = () => {
	const { file, isSpindleDetected, borderColor } = useResultHook();

	const markupOfDetection = useMemo(() => {
		if (isSpindleDetected === SPINDLE_EUPLOIDY.ANEUPLOID) {
			return <div className='aneuploid-img'></div>;
		}
		if (isSpindleDetected === SPINDLE_EUPLOIDY.UEPLOID) {
			return <div className='euploid-img'></div>;
		}
		return (
			<span className='euploid-noDetection'>
				Sorry, spindle not detected. <br /> Please try downloading the <br /> image with higher
				quality.
			</span>
		);
	}, [isSpindleDetected]);

	return (
		<div>
			<Header />
			<div className='unregistered__container'>
				<div className='unregistered__result-background'>
					<div
						style={{
							borderColor: borderColor,
							backgroundImage: `url(${file})`,
						}}
						className='unregistered__result-image'
					></div>
					<div className='unregistered__result'>{markupOfDetection}</div>
				</div>
				<div className='unregistered__access-button-container'>
					<Link className='unregistered__access-button' to={ROUTE_NAMES.SIGN_IN}>
						Sign in for full access
					</Link>
				</div>
			</div>
		</div>
	);
};
