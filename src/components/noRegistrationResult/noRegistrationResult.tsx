import React from 'react';
import { Header } from '../header';
import { Link } from 'react-router-dom';
import { ROUTE_NAMES } from '../../common/enums/routeNames';
import { useResultHook } from '../../common/hooks/useResult';
import { markupOfDetection } from '../../common/helpers/markupOfDetection';
import './noRegistrationResult.scss';

export const NoRegistrationResult = () => {
	const { file, isSpindleDetected, borderColor } = useResultHook();

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
					<div className='unregistered__result'>{markupOfDetection(isSpindleDetected)}</div>
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
